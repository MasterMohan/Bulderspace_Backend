// ** working
var fs = require('fs');
var dir = 'uploads/newProductImages';
const serviceURL = require('../client')

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}


const NewProductData = require('../model/newProductData');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/newProductImages/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    // accecpt or regect a file
    if (file.mimetype === 'image/jpeg' || file.minetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
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


let productUploader = async(req, res) => {
    try {
        const product = await new NewProductData({
            category: req.body.category,
            subcategory: req.body.subcategory,
            productname: req.body.productname,
            productbrand: req.body.productbrand,
            productdiscription: req.body.productdiscription,
            cost: req.body.cost,
            unit: req.body.unit,
            productimage: `newProductImages/${req.file.filename}`,
            productSpecification: [{
                sku: req.body.sku,
                size: req.body.size,
                manufacture: req.body.manufacture,
                productpricelabel: req.body.productpricelabel,
                manufacturesinformation: req.body.manufacturesinformation
            }]

        });
        const productsaved = await product.save();
        // console.log(req.body.manufacturesinformation)
        console.log(productsaved)
        console.log("file saved", req.file);
        res.json(productsaved)
    } catch (error) {
        // fs.unlink(`${req.file.path}`, function(err) {
        //     if (err) {
        //         throw err
        //     }
        // })
        res.status(401).send({ message: error })
        console.log(error);
    }

}


module.exports = ({ productUploader, upload });