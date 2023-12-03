let SellerData = require('../model/sellerdata.js');
const bcrypt = require('bcryptjs');
let loginSeller = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {

        const seller = await SellerData.findOne({ email });

        if (!seller) {
            console.log(seller);
            res.send({ error: "invalid username or password!" });
        } else {
            const isMatch = await bcrypt.compare(password, seller.password);
            console.log(isMatch);

            if (!isMatch) {
                // throw new Error("pls check the password & mail !! invalid password!!");
                res.send({ error: "invalid username or password!" });
            } else {
                let result = {};
                result._id = seller._id;
                result.firstname = seller.firstname;
                result.lastname = seller.lastname;
                result.email = seller.email;
                result.phone = seller.phone;
                result.gender = seller.gender;
                result.personaladdress = seller.personaladdress;
                result.businessname = seller.businessname;
                result.businessaddress = seller.businessaddress;
                result.gstin = seller.gstin;
                result.placeofbirth = seller.placeofbirth;
                result.image = seller.image;
                result.logintype = seller.logintype;

                res.send(result);
            }


        }

    } catch (error) {
        res.send(error);
    }
}


module.exports = ({ loginSeller });