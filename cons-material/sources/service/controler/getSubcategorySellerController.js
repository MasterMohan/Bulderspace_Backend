let Itemdescription = require('../model/allProductsData');

let getSubcagegory = async(req, res) => {
    let category = req.query.category;
    try {
        let subcategory = []
        let result = {}
        let iteminfo = await Itemdescription.find({ category });
        for (i = 0; i < iteminfo.length; i++) {
            if (!subcategory.includes(iteminfo[i].subcategory)) {
                subcategory.push(iteminfo[i].subcategory)
            }
        }
        for (i = 0; i < subcategory.length; i++) {
            result[i] = subcategory[i]

        }
        res.status(200).send(

            subcategory
        )

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getSubcagegory;