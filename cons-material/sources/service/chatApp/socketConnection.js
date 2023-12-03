const Msg = require('../model/chat');
const CreatedRoom = require('../model/createdRoom');
const NotificationCount = require('../model/notificationCount');

//recycler function 
const recyclerFunction = async(io, id) => {
    let result = await CreatedRoom.find({
        room: { $regex: `-${id}` }
    })
    if (result.length == 0) {
        result = await CreatedRoom.find({ room: { $regex: `${id}-` } });
    }

    // emiting recycler to user's room 
    if (result.length > 0) {
        let final = [];
        for (i = 0; i < result.length; i++) {
            let findCount = await NotificationCount.find({ id: id, room: result[i].room });
            if (findCount.length > 0) {
                console.log(result[i])
                object = {}
                object.result = result[i]
                object.messageCount = findCount[0].messagecount
                final.push(object);
            } else {
                object = {}
                object.result = result[i]
                object.messageCount = 0
                final.push(object);
            }

        }
        io.to(id).emit('recycler', final);
        console.log(`final recycler of id ${id} is`, final)
            // io.to(id).emit('recycler', final);
            // io.to(id).emit('recycler', result);
    } else {
        io.to(id).emit('recycler', result);
    }
}
const chat = (io) => {
    io.on('connection', socket => {

        //join user to user-room in background to get realtime notification and recycler
        socket.on('user', async id => {
            console.log('user joined: ', id);
            socket.join(id)


            recyclerFunction(io, id);
        });


        //join user to chat-room
        socket.on('join_room', async room => {
            socket.join(room)
            console.log('joined to:', room);

            //sending  old chat as soo as joined chat-room
            const oldChat = await Msg.find({ room });
            console.log(`all old chats for room ${room}:\n${oldChat}`);
            //emiting old chat to room
            socket.emit('old-chat', oldChat);


        })

        //send listener 
        socket.on('send', async data => {
            console.log('sending', data);

            //saving message to database
            const storeChat = await new Msg({
                from: data.from,
                message: data.message,
                sendTo: data.sendTo,
                room: data.room,
                sellername: data.sellername,
                customername: data.customername,
                time: data.time,
            })
            console.log('saving message to database');
            //now updated
            const storeChatSave = await storeChat.save();

            //saving room and latest message for list/recycler view
            let alreadyRoom = await CreatedRoom.find({ room: data.room })
            if (alreadyRoom.length > 0) {
                let saveRoom = await CreatedRoom.findOneAndUpdate({ room: data.room }, {
                    from: data.from,
                    message: data.message,
                    sendTo: data.sendTo,
                    room: data.room,
                    sellername: data.sellername,
                    customername: data.customername,
                    time: data.time,
                })

            } else {
                let saveRoom = await new CreatedRoom({
                        from: data.from,
                        message: data.message,
                        sendTo: data.sendTo,
                        room: data.room,
                        sellername: data.sellername,
                        customername: data.customername,
                        time: data.time,
                    })
                    //now updated
                const saveRoomSave = await saveRoom.save();
            }


            //send notification to user-room
            io.to(data.sendTo).emit('notification', data);
            console.log('sending notification to id:', data.sendTo);

            // increase notification count of user

            const findForNotificationIdPresent = await NotificationCount.find({ id: data.sendTo, room: data.room })
            if (findForNotificationIdPresent.length > 0) {
                const updateMessageCount = await NotificationCount.findOneAndUpdate({
                    id: data.sendTo,
                    room: data.room
                }, { $inc: { messagecount: 1 } });
            } else {
                const createMessageCount = await new NotificationCount({
                    id: data.sendTo,
                    room: data.room,
                    messagecount: 1
                });

                //now updated
                const createMessageCountSave = await createMessageCount.save();
            }


            //send data to chat-room
            io.to(data.room).emit('receive', data);
            console.log('sending message to room:', data.room);

            // send updated recycler to end user
            recyclerFunction(io, data.sendTo);

        });

        //get recycler for calling recycler saperately
        socket.on('get-recycler', async id => {
            console.log('they are calling get recyclerwith id ', id)

            recyclerFunction(io, id);
        });

        //listening for video call notification
        socket.on('video-call', data => {
            console.log('getting data of video-call:\n', data);

            //emiting video-call notification to id
            io.to(data.sendTo).emit('video-notification', data);
            console.log(`sending video notificaation to ${data.sendTo}\n${data}`);

        });

        //clear notification-count
        socket.on('clear-notificationcount', async({ id, room }) => {
            console.log(`clearing notification count of id:${id}, room:${room} to 0.`)
            const clearMessageCount = await NotificationCount.findOneAndUpdate({
                id: id,
                room: room
            }, {
                messagecount: 0
            });
        });


    });
}

module.exports = chat;