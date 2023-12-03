let sellerCategory = require('../model/sellerCategories');
const AllCategories = require('../model/allcategories');

let results = ''
let updateCategorySelection = async(req, res) => {
    try {
        console.log(req.query.sellerid, req.query.categories)

        categoryList = await AllCategories.find().select('category')
            // console.log(categoryList)


        let catActiveList = []
        categoryList.map((value, index) => {
            // console.log(value.category)
            object = {}
            object.category = value.category
            object.active = false
            catActiveList.push(object)
        })

        console.log('activecategory list is >>>> ', catActiveList)

        results = await sellerCategory.findOneAndUpdate({ sellerid: req.query.sellerid }, {
                $set: {
                    "categories": catActiveList
                }

            },
            function(err) { if (err) { console.log(err); } });

        let l1 = req.query.categories
        l1 = l1.split(',')

        list = []
        for (i = 0; i < l1.length; i++) {
            object = {}
            object = l1[i]
            list.push(object)
        }
        console.log("list", list)
            // let results = await sellerCategory.findOneAndUpdate({ 'categories.$.category': list,sellerid: req.query.sellerid}, {  'categories.$.active': 'true', })
        for (i = 0; i < list.length; i++) {

            results = await sellerCategory.findOneAndUpdate({ sellerid: req.query.sellerid, "categories.category": list[i] }, {
                    $set: {
                        "categories.$.active": true
                    }

                },
                function(err) { if (err) { console.log(err); } });
        }
        await res.send(results)



    } catch (error) {
        res.status(500).send({ message: error })
    }
}

module.exports = updateCategorySelection;