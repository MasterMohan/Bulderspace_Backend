const fetch = require('node-fetch');
const fileType = require('file-type');
const readChunk = require('read-chunk');
var request = require('request').defaults({ encoding: null });
let URL = 'https://www.buildersmart.in/';
fetch(URL).then(res => res.text()).then(res => {
    let parts = res.split(`level-1">`);
    for (let k = 1; k < parts.length; k++) {
        let category = parts[k].split(`menu-title">`);
        category = category[1].split(`</span>`);

        category = category[0]
        let partSubs = parts[k].split(`level-2">`);
        for (let i = 1; i < partSubs.length; i++) {
            let partSub = partSubs[i];
            // subCategory Name
            let subcategory = partSub.split(`menu-title">`);
            subcategory = subcategory[1].split(`</span>`);
            subcategory = subcategory[0];

            // subCategory url
            let partSubUrl = partSub.split(`href="`);
            partSubUrl = partSubUrl[1].split(`">`);
            let url = `${partSubUrl[0]}`;

            fetch(url).then(res => res.text()).then(res => {
                // console.log(category)
                // console.log(subcategory);
                let items = res.split(`item-inner compare-item">`);
                for (let j = 1; j < items.length; j++) {
                    let item = items[j];

                    let itemname = item.split(`title="`);
                    itemname = itemname[1].split(`">`);
                    itemname = itemname[0];
                    let cost = item.split(`Rs.`);
                    cost = cost[1].split(`</span>`);
                    cost = cost[0];
                    let itempre = item.split(`by <span>`);
                    itemBrand = itempre[1].split(`</span>`);
                    itemBrand = itemBrand[0].trim()
                    let itemImage = item.split(`src="`);
                    itemImage = itemImage[1].split(`"`);
                    itemImage = itemImage[0];

                    let urlEachItem = item.split(`href="`);
                    urlEachItem = urlEachItem[1].split(`"`);
                    urlEachItem = urlEachItem[0];
                    // console.log(urlEachItem)
                    fetch(urlEachItem).then(res => res.text()).then(res => {
                        // console.log(res);
                        let items2 = res.split(`product-full-description">`);
                        let item1 = items2[2];
                        let typeOfDetails2 = item1.split(`h3>`);
                        typeOfDetails2 = typeOfDetails2[1].split(`</`);
                        typeOfDetails2 = typeOfDetails2[0];
                        // console.log(typeOfDetails2)
                        let infoAdd = item1.split(`<strong>`);
                        infoAdd = infoAdd[1].split(`</strong>`);
                        infoAdd = infoAdd[0];
                        // console.log(infoAdd);
                        let infoLabels = item1.split(`label">`);
                        // console.log(infoLabel.length);
                        let itemFeatureAllData = []
                        let itemFeaturedata = [];
                        for (let q = 1; q < infoLabels.length; q++) {
                            let infoLabel = infoLabels[q];

                            let itemFeature = infoLabel.split(`</`);
                            itemFeature = itemFeature[0];
                            itemFeatureAllData.push(itemFeature);
                            let itemFeatureDatas = item1.split(`data">`);
                            let itemFeatureData = itemFeatureDatas[q];
                            itemFeatureData = itemFeatureData.split(`</`);
                            itemFeatureData = itemFeatureData[0].trim();
                            itemFeaturedata.push(itemFeatureData);
                        }



                        fetch(itemImage)
                            .then(res => res.buffer())
                            .then(async file => {
                                const buffer = readChunk.sync(file, 0, 512)
                                let type = await fileType.fromBuffer(buffer)
                                console.log("type of file", type)
                                return value
                                })
                            .then(type => console.log(type));
                        // fetch(itemImage).then(res=>res.text())
                        // .then(res=>{
                        //     console.log(res)
                        // })
                        // console.log(itemFeatureAllData);
                        // console.log(itemFeaturedata);

                    })
                    // console.log(itemname) 
                    // console.log(itemBrand);
                    // console.log(cost);
                    // console.log(itemImage);

                    // let cementData = new CementData({
                    //     category: category, subcategory: subcategory, item: itemname,
                    //     itembrand: itemBrand, itemimage: itemImage, cost: cost
                    // });
                    // try {
                    //     cementData.save();

                    // } catch (error) {
                    //     console.log(error);
                    // }
                }
            })
        }
    }

})