const sellerCategories = require('../model/sellerCategories');
const AllCategory = require('../model/allcategories');



const selectedCategory = async(req, res) => {
    try {
        // console.log(req.params.sellerid)
        const seller = await sellerCategories.find({ sellerid: req.params.sellerid });
        console.log('seller cateogries first', seller[0].categories[0])
        console.log('seller----', seller);
        let catList = seller[0].categories;
        console.log('sellercatList----', catList);

        var results = catList.filter(function(state, error) {
            if (state.active == true) {
                return true;
            } else false;
        });
        var categorytofind = [];
        for (var i = 0; i < results.length; i++) {
            categorytofind.push(results[i].category.toString());
        }
        let category = categorytofind.toString();
        category = category.split(',')
        list = []
        for (i = 0; i < category.length; i++) {
            object = {}
            object.category = category[i]
            list.push(object)
        }
        console.log('list', list)
        let finalresults = await AllCategory.find({ $or: list });
        console.log('truefield', finalresults);
        res.status(200).send(finalresults);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


module.exports = selectedCategory;