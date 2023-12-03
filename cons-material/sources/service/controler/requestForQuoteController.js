let nodemailer = require('nodemailer');
var Hogan = require('hogan.js')
    // const bcrypt = require('bcryptjs');
const fs = require('fs');
require("dotenv/config");
const path = require('path');
const RequestForQuote = require('../model/requestforquotedata')
let SellerData = require('../model/sellerdata');
const { userInfo } = require('os');


var template = fs.readFileSync('views/requestforquote.hjs', 'utf-8');
var compiledTemplate = Hogan.compile(template);

let useremail = '',
    selleremail = '',
    userphone = '';
let requestforQuote = async(req, res) => {

    const sellerid = req.body.sellerId
    useremail = req.body.email
    userphone = req.body.phone
    let requirement = req.body.requirement
    console.log('sellerinfo1', sellerid)
    try {

        let sellerdata = await SellerData.find({ _id: req.body.sellerId })
        console.log('sellerinfo11', sellerdata)
        console.log('sellerinfo', sellerdata[0].firstname + " " + sellerdata[0].lastname, sellerdata[0].email)
        selleremail = sellerdata[0].email;
        let sellerfullname = sellerdata[0].firstname + " " + sellerdata[0].lastname;
        let transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            },
        });
        console.log('sellerinfo112', useremail, selleremail, sellerfullname, requirement)



        var mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: selleremail,
            subject: 'Builderspace Request For Quote.',
            html: compiledTemplate.render({ sellerfullname: sellerfullname, requirement: requirement, useremail: useremail, userphone: userphone }),
            attachments: [{
                filename: 'logoseller.png',
                path: `${path.join(__dirname, '../', '../', '../', '../', 'views/')}logoseller.png`,
                cid: 'logo'
            }]
        };

        // console.log(`${path.join(__dirname, '../', '../', '../', '../', 'views')}/sky-690293__340.jpg`)
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        let requestquote = await new RequestForQuote({
            email: req.body.email,
            phone: req.body.phone,
            requirement: req.body.requirement,
            sellerId: req.body.sellerId,

        });
        const requestquoteSaved = await requestquote.save()
        console.log(requestquoteSaved);
        res.send("Request For Quote has been sent to seller's registered email address.");

    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

module.exports = requestforQuote