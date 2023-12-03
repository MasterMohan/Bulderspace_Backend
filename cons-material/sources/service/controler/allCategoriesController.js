let AllCategory = require('../model/allcategories');

let fetchAllCategory = async(req, res) => {
    try {
        if (!req.query.category) {

            let results = await AllCategory.find();
            res.send(results)
        } else {
            let l1 = req.query.category
            l1 = l1.split(',')

            list = []
            for (i = 0; i < l1.length; i++) {
                object = {}
                object.category = l1[i]
                list.push(object)
            }
            let results = await AllCategory.find({ $or: list });
            res.send(results)

        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

module.exports = ({ fetchAllCategory });