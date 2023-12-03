let UserData = require('../model/userdata');

let editUser = async(req, res) => {
    let _id = req.params.Id
    console.log(_id)
    try {
        if (req.body.firstname) {
            console.log(req.body.firstname);

            let user = await UserData.findOneAndUpdate({ _id }, { firstname: req.body.firstname })
        }
        if (req.body.lastname) {
            console.log(req.body.lastname);

            let user = await UserData.findOneAndUpdate({ _id }, { lastname: req.body.lastname })
        }
        if (req.body.address) {
            console.log(req.body.address);

            let user = await UserData.findOneAndUpdate({ _id }, { address: req.body.address })
        }
        if (req.body.gender) {
            console.log(req.body.gender);

            let user = await UserData.findOneAndUpdate({ _id }, { gender: req.body.gender })
        }
        if (req.body.placeofbirth) {
            console.log(req.body.placeofbirth);

            let user = await UserData.findOneAndUpdate({ _id }, { placeofbirth: req.body.placeofbirth })
        }
        res.send('information updated successfully.')

    } catch (error) {
        res.send(error)
    }
}



module.exports = ({ editUser });