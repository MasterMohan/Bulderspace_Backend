const Product = require('../model/sellingProducts');
const sellerData = require('../model/sellerdata')

let sellingProducts = async(req, res) => {
    const time = req.params.time;
    const date = req.params.date
    try {
        alreadyAdded = await Product.find({
            sellerId: req.params.sellerId,
            productId: req.params.productId
        })

        if (alreadyAdded.length > 0) {
            res.send('You have already added this product.')
        } else {
            const d = new Date()
            const product = await new Product({
                cost: req.body.cost,
                sellerId: req.params.sellerId,
                productId: req.params.productId,
                date: date,
                time: time
            });
            const productsaved = await product.save();

            // res.send("Product added succesfully.")
            res.send(productsaved);
        }
    } catch (error) {
        res.status(401).send({ message: error })
        console.log(error);
    }

}


module.exports = sellingProducts;