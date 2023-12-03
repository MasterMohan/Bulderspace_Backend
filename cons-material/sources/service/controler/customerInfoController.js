let UserData = require('../model/userdata');

let customerInfo = async(req, res) => {
    let _id = req.params.Id
    try {
        const customer = await UserData.findOne({ _id });
        console.log(req.params.Id)
        console.log(customer)
        res.status(200).send(customer)
    } catch (err) {
        res.send(err)
    }
}

module.exports = customerInfo