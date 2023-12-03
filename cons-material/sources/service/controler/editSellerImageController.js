// ** working
var fs = require('fs');
var dir = 'uploads/allSellerImages';
// const serviceURL = require('../client')

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let SellerData = require('../model/sellerdata');
// const bcrypt = require('bcryptjs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/allSellerImages/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    // accecpt or regect a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
        ImageVar = "True";
    } else {
        cb(new Error('file format not supported!'), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

let editSellerImage = async(req, res) => {
    // use our user model to find the email we want
    //console.log("email",req.body.email);

    const user = await SellerData.findOneAndUpdate({ _id: req.params.Id }, {

            image: `allSellerImages/${req.file.filename}`

        },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send("Your Profile image Has Been Updated Successfully.").status(200);
            }

        }
    );

}

module.exports = ({ editSellerImage, upload });