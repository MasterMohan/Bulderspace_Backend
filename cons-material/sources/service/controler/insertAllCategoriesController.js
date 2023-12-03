const AllCategories = require('../model/allcategories');
const imageToBase64 = require('image-to-base64');
// const buffer = require('buffer')
const fs = require('fs')

// const serviceURL = require('../client')

var dir = 'uploads/categoryImages';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}


let fun = function(url, category, discription) {
    imageToBase64(url) // Path to the image
        .then(
            (response) => {
                const buffer = Buffer.from(response, "base64")
                fs.writeFileSync(`uploads/categoryImages/${category}.jpg`, buffer)
                const categories = new AllCategories({
                    category: category,
                    categoryImage: `/categoryImages/${category}.jpg`,
                    discription: discription
                })

                categories.save();
                // res.send('done')
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
}


insertAllcategories = async(req, res) => {
    try {
        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/u/l/ultratech_cement.jpg", "Cement", "The higher strength Cements to meet your needs for higher strength concrete");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/b/i/birla-tmt_6.jpg", "Steel", "Buy strongest Steels from best selling brands in India.");

        fun("https://media.istockphoto.com/photos/plastic-pvc-pipes-isolated-on-the-white-background-picture-id1125133024?k=6&m=1125133024&s=612x612&w=0&h=J9rU7Xwk4Yf01XVlA-J6qXNSbDBkzYMz1VhF4kal5lw=", "Pipes", "Get all required Pipes and Fittings with best quality.")

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/b/a/basawrpry0009.jpeg", "Sanitary", "Buy best quality Sanitaryware from best manufacturers.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/s/h/shutteringplywood.jpg", "Wood", "Buy all required Wood Products with every available shape and size.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/n/s/nsmrbothr0006_2.jpg", "Marble", "Buy durable Marbles from great brands.");

        // fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/a/e/aerobild_1.jpg", "Bricks");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/e/l/elelpltpc0001.png", "Electrical", "Buy good quality of Electric Prouducts from top brands.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/p/f/pfdepcbgr0007.png", "Paints", "Get Paints from great brands with range of colours for your designs.");

        // fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/r/i/river_sand.jpeg", "Sand");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/m/7/m7.5_1_1.jpg", "Ready Mix Concrete", "Get freshly Mix Concrete to your construction site in time.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/l/e/led_mirrors_boho_2.jpg", "Glass-Hardware", "Buy superior Glass-Hardware/Mirriors with smart features and finer build quality.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/r/s/rsrsotlrp0003.png", "Roofing Solutions", "Get best products for your every Roofing.");

        fun("https://www.buildersmart.in/media/catalog/product/cache/1/image/150x150/9df78eab33525d08d6e5fb8d27136e95/l/p/lpinlssys0023.jpg", "Lighting", "Buy better quality Lighting Products for your every outdoor indoor lighting.");

        res.send('done - run only once ');

    } catch (error) {
        console.log(error)
    }
}




module.exports = insertAllcategories