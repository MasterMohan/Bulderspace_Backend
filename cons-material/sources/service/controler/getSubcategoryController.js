let Itemdescription = require('../model/allProductsData');

let getSubcagegory = async(req, res) => {
    let category = req.query.category;
    // console.log(category)
    try {
        let subcategory = []
        let result = {}
        let iteminfo = await Itemdescription.find({ category });
        for (i = 0; i < iteminfo.length; i++) {
            // console.log(iteminfo[i].subcategory)
            if (!subcategory.includes(iteminfo[i].subcategory)) {
                subcategory.push(iteminfo[i].subcategory)
                    // result[i] = subcategory[i]
            }
        }
        // console.log(iteminfo.length)
        // console.log('itemifo cha 0', iteminfo[0])
        // console.log(subcategory[0])
        // console.log(subcategory[1])

        for (i = 0; i < subcategory.length; i++) {
            // console.log(i, subcategory[i])
            result[i] = subcategory[i]
                // console.log(result[i])

        }
        // console.log(objects)
        res.status(200).send(

            subcategory
            // iteminfo
            // result
        )

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getSubcagegory;