const newData = require('../model/newProductData');

let deleteData = async(req, res) => {
    const q = req.query.id;
    // console.log(q);
    l = q.split(',');
    result = []
    for (i = 0; i < l.length; i++) {
        console.log(i, l[i])
        let deleteProduct = await newData.findOneAndDelete({ _id: l[i] });
        result.push(deleteProduct)
    }
    res.send({
        deletedProducts: result
    })
}


module.exports = deleteData;