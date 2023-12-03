let AllCategory = require('../model/allcategories');

let fetchAllCategory = async(req, res) => {
    try {
        let results = await AllCategory.find().select('category').select('categoryImage');
        res.send(results);
    } catch (error) {
        res.send(error);
        console.log(error)
    }
}

module.exports = ({ fetchAllCategory });