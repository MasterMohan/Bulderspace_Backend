const Product = require('../model/sellingProducts');
const sellerData = require('../model/sellerdata')
const AllProductData = require('../model/allProductsData')


let onesellerProducts = async(req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;
    let sellerId = req.params.sellerId;
    // // console.log(sellerId)
    try {
        let year = req.query.year;
        // // console.log(year)
        let month = req.query.month;
        // // console.log(month)
        let date = req.query.date;
        // // console.log(date)
        let category = req.query.category

        let product
        if (year && month && date) {
            // console.log('year is there')
            product = await Product.find({ sellerId, updatedAt: { $gte: new Date(`${year} ${month} ${date}`) } })
        } else {
            product = await Product.find({ sellerId })
                // console.log('year is not there')
        }
        let result = []

        for (let i = 0; i < product.length; i++) {

            let object = {}

            productId = product[i].productId
                // // console.log(productId)
            let productInfo
            if (category) {
                productInfo = await AllProductData.find({ _id: productId, category: category });
                // console.log('category is there');
                if (productInfo.length > 0) {
                    object.cost = product[i].cost
                    object.date = product[i].date
                    object.time = product[i].time
                    object.product = productInfo[0]
                    result.push(object)
                }
            } else {
                productInfo = await AllProductData.find({ _id: productId });
                // console.log('category is not there');
                object.cost = product[i].cost
                object.date = product[i].date
                object.time = product[i].time
                object.product = productInfo[0]
                result.push(object)
            }



            // result.push(product)
            // // console.log(productInfo)


        }
        // console.log(result.length)
        // res.send(result)
        if (!page || !limit) {
            res.send(result)
            console.log('pagination is not applied in url there')
        } else {
            res.send(result.slice((page - 1) * limit, page * limit))
        }
        // res.send(result.slice(3, 4))


        // res.json(product)
    } catch (error) {
        res.status(401).send({ message: error })
            // console.log(error);
    }

}


// module.exports = { onesellerProducts, paginatedResults };
module.exports = onesellerProducts;