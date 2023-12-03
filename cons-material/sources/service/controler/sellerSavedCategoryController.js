let sellerCategory = require('../model/sellerCategories');

let results = ''
let saveCategorySeller = async(req, res) => {
    try {
        console.log(req.query.sellerid, req.query.categories)


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
        await res.send('updated category selection.')



    } catch (error) {
        res.status(500).send({ message: error })
    }
}

module.exports = saveCategorySeller;