let UserData = require('../model/userdata');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
var Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
require("dotenv/config");

var template = fs.readFileSync('views/userRegister.hjs', 'utf-8');
var compiledTemplate = Hogan.compile(template);

let registerUser = async(req, res) => {
    try {
        const user = await new UserData({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            address: req.body.address,
            placeofbirth: req.body.placeofbirth,
            password: req.body.password,
            logintype: req.body.logintype
        });
        user.password = await bcrypt.hash(user.password, 8);
        let usersaved = await user.save();

        // send email if user successfully saved 
        if (usersaved) {

            let transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASSWORD
                },
            });


            var mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: req.body.email,
                subject: 'Welcome to BuilderSpace.',
                html: compiledTemplate.render({ firstname: req.body.firstname, lastname: req.body.lastname }),
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
        }
        let newUser = {};
        newUser._id = usersaved._id;
        newUser.firstname = usersaved.firstname;
        newUser.lastname = usersaved.lastname;
        newUser.email = usersaved.email;
        newUser.phone = usersaved.phone;
        newUser.gender = usersaved.gender;
        newUser.address = usersaved.address;
        newUser.placeofbirth = usersaved.placeofbirth;
        newUser.logintype = usersaved.logintype;
        // newUser = _.omit(newUser, 'password');
        res.send(newUser);
        // res.send(usersaved);
        console.log((usersaved), (newUser));
    } catch (error) {
        if (error.code == 11000) {
            res.status(401).send('Email Id or Phone Number already exist.')
        } else {
            res.status(401).send({ "error": error })
        }
        // res.status(401).send(error)
        // console.log(error);
    }

}


module.exports = ({ registerUser });