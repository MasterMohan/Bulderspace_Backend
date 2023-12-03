let nodemailer = require('nodemailer');
var Hogan = require('hogan.js')
    // const bcrypt = require('bcryptjs');
const fs = require('fs');
require("dotenv/config");
const path = require('path');
const OTP = require('../model/otp')
let UserData = require('../model/userdata')


var template = fs.readFileSync('views/otp.hjs', 'utf-8');
var compiledTemplate = Hogan.compile(template);



var string = '0123456789';

let emailVerification = async(req, res) => {
    const email = req.body.email
    try {
        let otp = ''
        let alreadyExist = await UserData.find({ email })

        if (alreadyExist.length > 0) {
            res.send('Email already exist.')
        } else {
            //delete otp if already exit with this email
            const deleteOtpAlreadyExit = await OTP.findOneAndDelete({ email })

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
                    filename: 'logocustomer.png',
                    path: `${path.join(__dirname, '../', '../', '../', '../', 'views/')}logocustomer.png`,
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
            res.send("OTP has been sent to your register email address.");
        }
    } catch (error) {
        console.log(error);
        res.send(error);

    }
}

module.exports = emailVerification