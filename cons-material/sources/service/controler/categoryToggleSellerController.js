sellerCategories = require('../model/sellerCategories')
const categoryToggle = async(req, res) => {
    console.log(req.params.id)
    sellerCategoryToggle = await sellerCategories.find({ sellerid: req.params.id })
    console.log(sellerCategoryToggle[0].categories)
    res.send(sellerCategoryToggle[0].categories)
}

module.exports = categoryToggle;