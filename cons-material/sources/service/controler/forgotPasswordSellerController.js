let UserData = require('../model/sellerdata');
const OTP = require('../model/otp')
let nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
var Hogan = require('hogan.js')
const fs = require('fs');
require("dotenv/config");
const path = require('path');


var template = fs.readFileSync('views/otp.hjs', 'utf-8');
var compiledTemplate = Hogan.compile(template);



var string = '0123456789';
let forgotPassword = async(req, res) => {
    let email = req.body.email;

    try {
        let otp = "";

        const deleteOtpAlreadyExit = await OTP.findOneAndDelete({ email })

        const user = await UserData.findOne({ email });

        if (!user) {
            res.send({ error: "Sorry,You Have Entered Wrong Email." });
        } else {
            for (let i = 0; i < 6; i++) {
                otp += string[Math.floor(Math.random() * string.length)];
            }
            // hashotp = await bcrypt.hash(otp, 8)

            let transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASSWORD
                },
            });

            var mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Builderspace Confirmation OTP.',
                html: compiledTemplate.render({ otp: otp }),
                attachments: [{
                    filename: 'logoseller.png',
                    path: `${path.join(__dirname, '../', '../', '../', '../', 'views/')}logoseller.png`,
                    cid: 'logo'
                }]
            };

            console.log(`${path.join(__dirname, '../', '../', '../', '../', 'views')}/sky-690293__340.jpg`)
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            let saveotp = await new OTP({
                email: req.body.email,
                otp: otp
            });
            const otpSaved = await saveotp.save()
            console.log(otpSaved);
            res.send("OTP has been sent to your register email address.").status(200);
        }

    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = ({ forgotPassword });