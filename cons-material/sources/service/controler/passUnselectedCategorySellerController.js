const sellerCategories = require('../model/sellerCategories');
const allCategories = require('../model/allcategories')


const unSelecetCategory = async(req, res) => {
    try {
        const previousCategories = await sellerCategories.find({ sellerid: req.params.sellerid }).select(['categories', '-_id']);

        let oldData = previousCategories[0].categories
        console.log('oldData is:', oldData);

        oldData = oldData.split(',');

        const restOfCategory = await allCategories.find({ category: { $nin: oldData } });
        console.log(restOfCategory);



        res.send(restOfCategory);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

module.exports = unSelecetCategory;