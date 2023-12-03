const VideoFeedbackData = require('../model/videoFeedbackData');
const customerData = require('../model/userdata');

const feedback = async(req, res) => {
    try {
        const personid = req.body.personid;
        const ratings = req.body.ratings;
        const persontype = 'customer'
            // console.log(personid, ratings);


        const isCustomer = await customerData.find({ _id: personid });
        console.log(isCustomer)
        if (isCustomer.length !== 0) {
            const saveFeedback = await new VideoFeedbackData({
                personid: personid,
                ratings: ratings,
                persontype: persontype,
            })

            const saveData = await saveFeedback.save();

            res.send(saveData)
        } else {
            res.send('wrong person/customer id ')
        }

    } catch (error) {
        if (error.path == "_id") {
            res.status(500).send('wrong personid/customerid');
        } else {
            res.send(error);
        }
    }


}

module.exports = feedback;