const sellerCategories = require('../model/sellerCategories');


isSelected = async(req, res) => {
    try {
        const findSeller = await sellerCategories.find({ sellerid: req.params.sellerid })

        if (findSeller.length > 0) {
            res.status(200).send('category list present.');
        } else {
            res.status(404).send('category list absent.');
        }
    } catch (error) {
        res.send(error);
    }
}


module.exports = isSelected