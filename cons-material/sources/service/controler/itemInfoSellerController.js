let Itemdescription = require('../model/allProductsData');

let fetchItemInfo = async(req, res) => {
    let itemId = req.params.id;
    // console.log(itemId)
    try {
        let iteminfo = await Itemdescription.findById(itemId);
        res.status(200).send({
            iteminfo
        })

    } catch (error) {
        res.status(400).send({ message: error })
    }

}

module.exports = fetchItemInfo;