let SellerData = require('../model/sellerdata');

let editUser = async(req, res) => {
    let _id = req.params.Id
    console.log(_id)
    try {
        if (req.body.firstname) {
            console.log(req.body.firstname);

            let seller = await SellerData.findOneAndUpdate({ _id }, { firstname: req.body.firstname })
        }
        if (req.body.lastname) {
            console.log(req.body.lastname);

            let seller = await SellerData.findOneAndUpdate({ _id }, { lastname: req.body.lastname })
        }
        if (req.body.personaladdress) {
            console.log(req.body.personaladdress);

            let seller = await SellerData.findOneAndUpdate({ _id }, { personaladdress: req.body.personaladdress })
        }
        if (req.body.gender) {
            console.log(req.body.gender);

            let seller = await SellerData.findOneAndUpdate({ _id }, { gender: req.body.gender })
        }
        if (req.body.placeofbirth) {
            console.log(req.body.placeofbirth);

            let seller = await SellerData.findOneAndUpdate({ _id }, { placeofbirth: req.body.placeofbirth })
        }
        if (req.body.businessname) {
            console.log(req.body.businessname);

            let seller = await SellerData.findOneAndUpdate({ _id }, { businessname: req.body.businessname })
        }
        if (req.body.businessaddress) {
            console.log(req.body.businessaddress);

            let seller = await SellerData.findOneAndUpdate({ _id }, { businessaddress: req.body.businessaddress })
        }
        if (req.body.gstin) {
            console.log(req.body.gstin);

            let seller = await SellerData.findOneAndUpdate({ _id }, { gstin: req.body.gstin })
        }
        res.send('information updated successfully.')

    } catch (error) {
        res.send(error)
    }
}



module.exports = ({ editUser });