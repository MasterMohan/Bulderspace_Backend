const chats = require('../model/chat');

const chatHistory = async(req, res) => {
    const sellerId = req.params.id;

    const allChats = await chats.find({ room: { $regex: "2-" } })
    const all = allChats
    const uniqueMsg = []
    const msg = []
    for (i = 0; i < all.length; i++) {
        if (all[i].id != sellerId) {
            object = {}
            if (!uniqueMsg.includes(all[i].room)) {
                uniqueMsg.push(all[i].room);
                object.room = all[i].room;
                object.name = all[i].name;
                msg.push(object);
            }
        }
    }
    res.send(msg)
}

module.exports = chatHistory;