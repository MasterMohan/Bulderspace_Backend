let SellerData = require('../model/sellerdata');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
var Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
require("dotenv/config");

const AllCategories = require('../model/allcategories');
const sellerCategories = require('../model/sellerCategories');


var template = fs.readFileSync('views/userRegister.hjs', 'utf-8');
var compiledTemplate = Hogan.compile(template);

let registerSeller = async(req, res) => {
    try {
        const seller = await new SellerData({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            personaladdress: req.body.personaladdress,
            businessname: req.body.businessname,
            businessaddress: req.body.businessaddress,
            gstin: req.body.gstin,
            placeofbirth: req.body.placeofbirth,
            password: req.body.password,
            image: "",
            logintype: req.body.logintype
        });
        seller.password = await bcrypt.hash(seller.password, 8);
        const sellersaved = await seller.save();

        // send email if user successfully saved 
        if (sellersaved) {

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

            //save category for seller for dashboard use
            console.log(sellersaved._id)
            categoryList = await AllCategories.find().select('category')
                // console.log(categoryList)
            list = [{
                    category: 'cement',
                    active: true
                },
                {
                    category: 'pipes',
                    active: true
                },
                {
                    category: 'steel',
                    active: false
                },
                {
                    category: 'marble',
                    active: true
                },
            ]

            let catActiveList = []
            categoryList.map((value, index) => {
                // console.log(value.category)
                object = {}
                object.category = value.category
                object.active = false
                catActiveList.push(object)
            })

            console.log('activecategory list is >>>> ', catActiveList)

            let saveCatActiveList = await sellerCategories({
                sellerid: sellersaved._id,
                categories: catActiveList,
            })
            let savedCatActiveList = saveCatActiveList.save();

        }


        console.log(sellersaved);

        let newSeller = {};

        newSeller._id = sellersaved._id;
        newSeller.firstname = sellersaved.firstname;
        newSeller.lastname = sellersaved.lastname;
        newSeller.email = sellersaved.email;
        newSeller.phone = sellersaved.phone;
        newSeller.gender = sellersaved.gender;
        newSeller.personaladdress = sellersaved.personaladdress;
        newSeller.businessname = sellersaved.businessname;
        newSeller.businessaddress = sellersaved.businessaddress;
        newSeller.gstin = sellersaved.gstin;
        newSeller.placeofbirth = sellersaved.placeofbirth;
        newSeller.image = sellersaved.image;
        newSeller.logintype = sellersaved.logintype;

        res.send(newSeller);
    } catch (error) {
        if (error.code == 11000) {
            res.status(401).send('Email Id or Phone Number already exist.')
        } else {
            res.status(500).send(error)
        }
        // res.status(401).send(error)
        // console.log(error);
    }

}


module.exports = ({ registerSeller });