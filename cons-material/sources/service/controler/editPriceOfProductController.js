let Product = require('../model/sellingProducts');
let updateproductprice = async(req, res) => {
    let sellerId = req.params.sellerId;
    let productId = req.params.productId;
    let cost = req.body.cost;
    const date = req.params.date;
    const time = req.params.time
    const d = new Date()
    const product = await Product.findOneAndUpdate({ sellerId: sellerId, productId: productId },

        {
            cost: cost,
            date: date,
            time: time

        },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(`The Product has been updated successfully`);
            }

        }
    );
}

module.exports = ({ updateproductprice });