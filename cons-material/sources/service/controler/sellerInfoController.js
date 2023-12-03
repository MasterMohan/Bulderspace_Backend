let SellerData = require('../model/sellerdata');

let sellerInfo = async(req, res) => {
    let _id = req.params.Id
    try {
        const seller = await SellerData.findOne({ _id });
        console.log(req.params.Id)
        console.log(seller)
        res.status(200).send(seller)
    } catch (err) {
        res.send(err)
    }
}

module.exports = sellerInfo