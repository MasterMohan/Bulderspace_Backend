let UserData = require('../model/sellerdata');
const bcrypt = require('bcryptjs');
let resetPassword = async(req, res) => {
    let emailuser = req.query.email;
    let newpassword = req.body.newpassword;
    const bycryptpassword = await bcrypt.hash(newpassword, 10);
    let newuser = await UserData.findOneAndUpdate({ email: emailuser }, { password: bycryptpassword }, );
    if (newuser) {
        res.send("Your password has been changed, now login again.")
    } else {
        res.send("some error occured.")
    }
}


module.exports = ({ resetPassword });