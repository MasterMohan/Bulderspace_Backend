let Itemdescription = require('../model/allProductsData');

let filterProducts = async(req, res) => {
    let category = req.query.category;
    let subcategory = req.query.subcategory;
    let productbrand = req.query.productbrand;
    if (category == undefined) {
        res.status(200).send('select atleast one parameter')
    } else if (category != undefined && subcategory == undefined && productbrand == undefined) {
        try {
            let iteminfo = await Itemdescription.find({ category });

            res.status(200).send(
                iteminfo
            )

        } catch (error) {
            res.status(400).send({ message: error })
        }
    } else if (category != undefined && subcategory != undefined && productbrand == undefined) {
        try {
            let iteminfo = await Itemdescription.find({ category, subcategory });

            res.status(200).send(
                iteminfo
            )

        } catch (error) {
            res.status(400).send({ message: error })
        }
    } else if (category != undefined && subcategory == undefined && productbrand != undefined) {
        try {
            let iteminfo = await Itemdescription.find({ category, productbrand });

            res.status(200).send(
                iteminfo
            )

        } catch (error) {
            res.status(400).send({ message: error })
        }
    } else {
        try {
            let iteminfo = await Itemdescription.find({ category, subcategory, productbrand });
            console.log(productbrand)
            res.status(200).send(
                iteminfo
            )

        } catch (error) {
            res.status(400).send({ message: error })
        }
    }


}

module.exports = filterProducts;