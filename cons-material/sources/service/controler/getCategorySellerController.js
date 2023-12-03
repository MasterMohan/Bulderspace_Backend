let Itemdescription = require('../model/allcategories');

let getCategory = async(req, res) => {
    try {
        let category = []
        let result = {}
        let iteminfo = await Itemdescription.find();
        for (i = 0; i < iteminfo.length; i++) {
            if (!category.includes(iteminfo[i].category)) {
                category.push(iteminfo[i].category)
            }
        }
        for (i = 0; i < category.length; i++) {
            result[i] = category[i]

        }
        res.status(200).send(

            category
        )

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getCategory;