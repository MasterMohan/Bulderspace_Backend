let AllProductsData = require('../model/allProductsData');

let getBrand = async(req, res) => {
    let category = req.params.category;
    let subcategory = req.params.subcategory;
    // console.log(category)
    try {
        let subcategory = []
        let objects = {}
        let iteminfo = await AllProductsData.find({ category });
        // for (i = 0; i < iteminfo.length; i++) {
        //     console.log(iteminfo[i].subcategory)
        //     if (!subcategory.includes(iteminfo[i].subcategory)) {
        //         subcategory.push(iteminfo[i].subcategory)
        //         objects[i] = subcategory[i]
        //     }
        // }
        // console.log(iteminfo.length)
        // console.log('itemifo cha 0', iteminfo[0])
        // console.log(objects)
        // console.log(subcategory)
        res.status(200).send({
            iteminfo
            // objects
        })

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = getBrand;