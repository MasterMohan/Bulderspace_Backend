let SellerData = require('../model/sellerdata');

let getSellerImg = async(req, res) => {
    try {
        let sellerid = req.params.sellerId;
        console.log("sellerid", sellerid)
        let sellerimg = await SellerData.find({ _id: sellerid }).select('sellerimage');

        res.status(200).send(

            sellerimg
        )

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getSellerImg;