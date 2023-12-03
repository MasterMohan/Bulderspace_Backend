let UserData = require('../model/userdata');
const bcrypt = require('bcryptjs');
let loginUser = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {

        const user = await UserData.findOne({ email });

        if (!user) {
            res.send({ error: "invalid username or password!" });
        } else {
            console.log(user);
            const isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);

            if (!isMatch) {
                // throw new Error("pls check the password & mail !! invalid password!!");
                res.send({ error: "invalid username or password!" });
            } else {
                let result = {}

                result._id = user._id;
                result.firstname = user.firstname;
                result.lastname = user.lastname;
                result.email = user.email;
                result.phone = user.phone;
                result.gender = user.gender;
                result.address = user.address;
                result.placeofbirth = user.placeofbirth;
                result.logintype = user.logintype;

                res.send(result);
            }

        }


    } catch (error) {
        res.send(error);
    }
}


module.exports = ({ loginUser });