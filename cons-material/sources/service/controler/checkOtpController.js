const bcrypt = require('bcryptjs');
const OTP = require('../model/otp');

let checkOtp = async(req, res) => {
    try {
        // console.log(req.query.hashotp)
        const email = req.query.email
        const otp = req.body.otp;
        // console.log(req.body.otp)
        // const isMatch = await bcrypt.compare(req.body.otp, req.query.hashotp);
        // console.log(isMatch);
        const isMatch = await OTP.find({ email, otp })
        if (isMatch.length > 0) {
            const deleteOtpAlreadyExit = await OTP.findOneAndDelete({ email, otp })
            console.log(deleteOtpAlreadyExit);
            res.send("success").status(200);
            return
        } else {
            res.send("Wrong OTP please confirm that again! OR request new otp.")
        }


    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = ({ checkOtp });