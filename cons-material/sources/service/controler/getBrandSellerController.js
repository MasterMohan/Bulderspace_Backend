let Itemdescription = require('../model/allProductsData');

let getSubcagegory = async(req, res) => {
    let category = req.query.category;
    let subcategory = req.query.subcategory;
    // console.log(category)
    try {
        let brand = []
        let result = {}
        let iteminfo = await Itemdescription.find({ category, subcategory });
        for (i = 0; i < iteminfo.length; i++) {
            console.log(iteminfo[i].subcategory)
            if (!brand.includes(iteminfo[i].productbrand)) {
                brand.push(iteminfo[i].productbrand)
            }

        }

        for (i = 0; i < brand.length; i++) {
            // console.log(i, subcategory[i])
            result[i] = brand[i]
                // console.log(result[i])

        }
        // console.log(iteminfo.length)
        // console.log('itemifo cha 0', iteminfo[0])
        console.log(result)
        console.log(brand)
        res.status(200).send(
            // iteminfo
            // result
            brand
        )

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getSubcagegory;