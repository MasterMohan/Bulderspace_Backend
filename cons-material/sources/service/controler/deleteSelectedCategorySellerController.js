const sellerCategories = require('../model/sellerCategories');

const deleteCategorySelection = async(req, res) => {
    try {
        const sellerid = req.query.sellerid;
        let category = req.query.category;


        if (sellerid && category) {
            category = category.split(',');

            // console.log(req.query.sellerid, req.query.category);
            const data = await sellerCategories.find({ sellerid });
            console.log(data);
            const selectedCategories = data[0].categories.split(',');
            let result = selectedCategories;

            category.map((name) => {
                result = result.filter((value) => {
                    return name != value;
                })
            })

            console.log(result);

            // const newData = selectedCategories.filter((value) => {
            //     return category != value;
            // })
            const newDataString = result.join()

            const updated = await sellerCategories.findOneAndUpdate(sellerid, { categories: newDataString });
            console.log(updated);

            res.status(200).send('selection updated');
        } else {
            res.status(404).send('parsing error');
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = deleteCategorySelection;