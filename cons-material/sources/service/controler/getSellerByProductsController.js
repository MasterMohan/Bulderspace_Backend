const Product = require('../model/sellingProducts');
const sellerData = require('../model/sellerdata')

let sellerbyproduct = async(req, res) => {
    let productId = req.params.productId;

    try {

        const product = await Product.find({ productId });

        result = []

        for (let i = 0; i < product.length; i++) {

            let object = {}

            sellerId = product[i].sellerId
            let seller = await sellerData.find({ _id: sellerId });

            object.cost = product[i].cost
            object.customercareemail = "info@incrivelsoft.com"
            object.seller = seller[0]

            result.push(object)
        }

        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        res.status(401).send({ message: error })
        console.log(error);
    }

}


module.exports = sellerbyproduct;