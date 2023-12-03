require('dotenv').config();
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

let express = require('express');
let app = express();

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
// app.use(
//     cors({
//         origin: ["*", "localhost", "127.0.0.1"],
//         methods: ['GET', 'POST'],
//         credentials: true
//     })
// )

const server = http.createServer(app)

const io = socket(server);

const chat = require('./sources/service/chatApp/socketConnection'); // --don't test
chat(io);


const fs = require('fs')

var dir = 'uploads';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

require('./sources/service/model/mongoose');

//cors policy 
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
//     next();
// });

//To Use JSON Format
app.use(express.json());


//login
let userLoginrRoute = require('./sources/service/router/userLoginRoute');
app.use(userLoginrRoute);

const sellerLoginRoute = require('./sources/service/router/SellerLoginroute');
app.use(sellerLoginRoute)

//register
const userRegisterRoute = require('./sources/service/router/userRegisterRoute');
app.use(userRegisterRoute);

const sellerRegisterRoute = require('./sources/service/router/sellerRegisterRoute')
app.use(sellerRegisterRoute);

//edit profile - customer
const editUserProfile = require('./sources/service/router/editUserProfileRoute')
app.use(editUserProfile)

//edit profile - seller
const editSellerProfile = require('./sources/service/router/editSellerProfileRoute')
app.use(editSellerProfile)

//Edit image - Seller
let editSellerImageRoute = require('./sources/service/router/editSellerImageRoute');
app.use(editSellerImageRoute);

//insert allcategories --don't test
const insertAllcategories = require('./sources/service/router/insertAllCategoriesRoute') //first run thisone
app.use(insertAllcategories); //first run this on 

//all category -customer
const allCategories = require('./sources/service/router/allCategoriesRoute');
app.use(allCategories);

//all category - selller (for selection)
const allCategoriesSellerRoute = require('./sources/service/router/allCategoriesSellerRoute');
app.use(allCategoriesSellerRoute);

//Saved Category -  seller 
const sellerSavedCategoryRoute = require('./sources/service/router/sellerSavedCategoryRoute');
app.use(sellerSavedCategoryRoute);

// get selected category for dashboard - seller
const selectedCategoriesSellerRoute = require('./sources/service/router/selectedCategoriesSellerRoute');
app.use(selectedCategoriesSellerRoute);

// check if selle added category list or not
const isSellerSelectedCategoryRoute = require('./sources/service/router/isSellerSelectedCategoryRoute');
app.use(isSellerSelectedCategoryRoute);

//get products by category for seller
const productsByCategorySellerRoute = require('./sources/service/router/productsByCategorySellerRoute')
app.use(productsByCategorySellerRoute);

//unselected category
const categoryToggleSellerRoute = require('./sources/service/router/categoryToggleSellerRoute');
app.use(categoryToggleSellerRoute);

//update selected category - seller
const updateCategorySelectionSellerRoute = require('./sources/service/router/updateCategorySelectionSellerRoute');
app.use(updateCategorySelectionSellerRoute);

//delete selected category - seller
const deleteSelectedCategorySellerRoute = require('./sources/service/router/deleteSelectedCategorySellerRoute');
app.use(deleteSelectedCategorySellerRoute);

//get products by category for customer
const productsByCategoryCustomerRoute = require('./sources/service/router/productsByCategoryCustomerRoute')
app.use(productsByCategoryCustomerRoute);

// main route - (/)
let routeMain = require('./sources/service/router/index');
app.use(routeMain);

//Item info customer
let itemInfo = require('./sources/service/router/itemInfoRoute');
app.use(itemInfo);

//Item info seller
let itemInfoSellerRoute = require('./sources/service/router/itemInfoSellerRoute');
app.use(itemInfoSellerRoute);


//Category seller for filter
let getCategorySellerRoute = require('./sources/service/router/getCategorySellerRoute');
app.use(getCategorySellerRoute);

//Subcategory customer for filter
let getsubcategoryRoute = require('./sources/service/router/getSubcategoryRoute');
app.use(getsubcategoryRoute);

//Subcategory seller for filter
let getSubcategorySellerRoute = require('./sources/service/router/getSubcategorySellerRoute');
app.use(getSubcategorySellerRoute);

//Brand customer for filter
let getbrandRoute = require('./sources/service/router/getBrandRoute');
app.use(getbrandRoute);

//Brand seller for filter
let getBrandSellerRoute = require('./sources/service/router/getBrandSellerRoute');
app.use(getBrandSellerRoute);

// Customer Products by filtering: Category, Subcategory, Brand
let filterProductsRoute = require('./sources/service/router/filterProductsRoute');
app.use(filterProductsRoute);


// Seller Products by filtering: Category, Subcategory, Brand
let filterProductsSellerRoute = require('./sources/service/router/filterProductsSellerRoute');
app.use(filterProductsSellerRoute);



// Store all data -- fetching --don't test
// const storealldataRoute = require('./sources/service/router/storeAllDataRoute')
// app.use(storealldataRoute);

//rename the category names --**run only once *****. --don't test
const renameCategoryNames = require('./sources/service/router/renameCategoryNamesRoute')
app.use(renameCategoryNames);


//selling products
const sellingProductsRouter = require('./sources/service/router/sellingProductsRouter')
app.use(sellingProductsRouter);

//edit price of selling products
const editPriceOfProductRoute = require('./sources/service/router/editPriceOfProductRoute')
app.use(editPriceOfProductRoute);


//forget password
const forgotPasswordRoute = require('./sources/service/router/forgotPasswordRoute')
app.use(forgotPasswordRoute);

//forget password -seller
const forgotPasswordSellerRoute = require('./sources/service/router/forgotPasswordSellerRoute')
app.use(forgotPasswordSellerRoute);

//check otp
const checkOtpRoute = require('./sources/service/router/checkOtpRoute')
app.use(checkOtpRoute);

//check otp -seller
const checkOtpSellerRoute = require('./sources/service/router/checkOtpSellerRoute')
app.use(checkOtpSellerRoute);

//reset password
const resetPasswordRoute = require('./sources/service/router/resetPasswordRoute')
app.use(resetPasswordRoute);

//reset password -seller
const resetPasswordSellerRoute = require('./sources/service/router/resetPasswordSellerRoute')
app.use(resetPasswordSellerRoute);

//to store allproduct --don't test
const allproductdata = require('./sources/service/router/allProductRouter')
app.use(allproductdata);

//add newproduct data --don't test
const newproductdata = require('./sources/service/router/newProductRoute');
app.use(newproductdata);

//to get all sellers by specific product
let sellerByProductsRoute = require('./sources/service/router/getSellerByProductsRoute');
app.use(sellerByProductsRoute);


//check in newproducts --don't test
const checkdataRoute = require('./sources/service/router/checkdataRoute');
app.use(checkdataRoute);

//get products added by perticular seller - history 
const getSellerAddedProductsRoute = require('./sources/service/router/getSellerAddedProductRoute');
app.use(getSellerAddedProductsRoute);

//info - customer
const customerInfoRoute = require('./sources/service/router/customerInfoRoute')
app.use(customerInfoRoute)

//info - seller
const sellerInfoRoute = require('./sources/service/router/sellerInfoRoute')
app.use(sellerInfoRoute)

//email verification seller
const sellerEmailVerificationRoute = require('./sources/service/router/sellerEmailVerificationRouter')
app.use(sellerEmailVerificationRoute);

//email verification customer
const customerEmailVerificationRoute = require('./sources/service/router/customerEmailVerificationRoute')
app.use(customerEmailVerificationRoute);

//delete products from new category --don't test
const deleteProductOfNewproductdataRoute = require('./sources/service/router/deleteProductOfNewproductdataRoute')
app.use(deleteProductOfNewproductdataRoute)

//chat history --don't test
const chatHistorySellerRoute = require('./sources/service/router/chatHistorySellerRoute');
app.use(chatHistorySellerRoute);

//fetch seller profilepic if uploaded
const getSellerImageRout = require('./sources/service/router/getSellerImageRoute')
app.use(getSellerImageRout);

//vide Feedback - Customer
const videoFeedbackCustomerRouter = require('./sources/service/router/videoFeedbackCustomerRouter');
app.use(videoFeedbackCustomerRouter);

//vide Feedback - Seller
const videoFeedbackSellerRoute = require('./sources/service/router/videoFeedbackSellerRoute');
app.use(videoFeedbackSellerRoute);


//request for quote - Customer
const requestForQuoteRout = require('./sources/service/router/requestForQuoteRoute')
app.use(requestForQuoteRout);




app.use(express.static('uploads/'));

let port = process.env.PORT || 3000;

// server listen
// app.listen(port, () => {
//     console.log(`Running on port: ${port}`)
// })
server.listen(port, () => {
    console.log(`Running on port: ${port}`)
});