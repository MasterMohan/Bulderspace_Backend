const VideoFeedbackData = require('../model/videoFeedbackData');
const sellerData = require('../model/sellerdata');

const feedback = async(req, res) => {
    try {
        const personid = req.body.personid;
        const ratings = req.body.ratings;
        const persontype = 'seller'
            // console.log(personid, ratings);


        const isSeller = await sellerData.find({ _id: personid });
        console.log(isSeller)
        if (isSeller.length !== 0) {
            const saveFeedback = await new VideoFeedbackData({
                personid: personid,
                ratings: ratings,
                persontype: persontype,
            })

            const saveData = await saveFeedback.save();

            res.send(saveData)
        } else {
            res.send('wrong person/seller id ')
        }



    } catch (error) {
        if (error.path == "_id") {
            res.status(500).send('wrong personid/sellerid');
        } else {
            res.send(error);
        }
    }


}

module.exports = feedback;