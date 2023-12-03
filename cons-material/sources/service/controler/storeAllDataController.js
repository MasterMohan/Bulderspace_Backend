const axios = require('axios');
const cheerio = require('cheerio');
const BuilderSmartData = require('../model/buildersmartdata');

const imageToBase64 = require('image-to-base64');
const fs = require('fs')
const serviceURL = require('../client')

var dir = 'uploads/allProductImages';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}


let missurl = ['https://www.buildersmart.in/tmt-steel/couplers', "https://www.buildersmart.in/glass-hardware/mirrors", "https://www.buildersmart.in/electrical/electric-panels"]


name1 = async function(url) {
    console.log('inside function')
    await axios.get(url).then((res) => res).then(res => {
        let productUrls = []
        splitUrl = url.split('/')
        let category = splitUrl[3];
        let subcategory = splitUrl[4];
        if (subcategory == undefined) {
            subcategory = category
        }
        // console.log(subURL[i])
        $ = cheerio.load(res.data)

        if (missurl.includes(url)) {
            $('.products-grid').find('.col-lg-3').each(function() {
                let productLink = $(this).find('.product-name').html()
                productLink = productLink.split(`f="`)[1].split(`" title`)[0]
                    // console.log(link)
                productUrls.push(productLink)
            })
        } else {
            $('.block-content-deal').find('.col-xs-6').each(function() {
                    productLink = $(this).find('.item-inner').children().first().attr('href')
                        // console.log('products links >>>>')
                        // console.log(productLink, '\n\n')
                    productUrls.push(productLink)
                })
                // console.log(productUrls)


        }


        for (k = 0; k <= productUrls.length - 1; k++) {
            axios.get(productUrls[k]).then((res) => res).then((res) => {
                $ = cheerio.load(res.data)
                    // console.log(`category: ${category}, subcategory: ${subcategory}`)
                itemname = $('.product-right').find('.col-xs-12').find('.product-full-details').find('.product-name-new').html()
                itemname = itemname.split(`<span>`)[1].split(`</span>`)[0]
                    // console.log('itemname --', itemname)
                let price = []
                $('.product-right').find('.col-xs-12').find('.product-full-details').find('.price-box').find('.price').each(function() {
                    let p = $(this).html()
                    price.push(p.trim())

                })
                price_1 = price[0].split('Rs.')[1]
                price_2 = price[1]
                if (price_2 == undefined) {
                    price_2 = '00'
                } else {
                    price_2 = price_2.split('Rs.')[1]

                }
                // console.log(price)
                // console.log('price_1 --', price_1)
                // console.log('price_2 --', price_2)
                try {
                    let bybrand = $('.product-right').find('.col-xs-12').find('.product-full-details').find('.product-seller').find('span').html()
                    itembrand = bybrand.split(`">`)[1].split(`<`)[0]
                        // console.log('brand --', brand)
                } catch (error) {
                    itembrand = ''
                        // console.log('no specific brand', )
                }

                let discription = $('.product-right').find('.std').html()
                discription = discription.trim()

                // console.log('discription --', discription)

                let specs = $('.product-right').find('#product-attribute-specs-table').html()

                let SKU = specs.split(`data">`)[1].split(`</`)[0].trim()
                    // console.log('SKU --', SKU)

                let size = specs.split(`data">`)[3].split(`</`)[0].trim()
                    // console.log('size --', size)

                let priceLabel = specs.split(`data">`)[11].split(`</`)[0].trim()
                    // console.log('priceLabel --', priceLabel)
                try {

                    var manufacture = specs.split(`data">`)[13].split(`</`)[0].trim()
                } catch {

                }
                // console.log('manufacture --', manufacture)



                let image = $('#cloud_zoom').attr('href')
                    // console.log('image --', image, '\n\n')



                const createdata = new BuilderSmartData({
                    category: category,
                    subcategory: subcategory,
                    itemname: itemname,
                    oldprice: price_1,
                    newprice: price_2,
                    unit: 'Rs',
                    brand: itembrand,
                    discription: discription,
                    sku: SKU,
                    size: size,
                    pricelable: priceLabel,
                    manufacture: manufacture,
                    image: image
                })

                createdata.save()







            })
        }



    })
}



func = async function() {
    // name1('https://www.buildersmart.in/glass-hardware/mirrors');
    // name1('https://www.buildersmart.in/cement/53-grade-cement');
    // name1('https://www.buildersmart.in/cement/ppc');
    // name1('https://www.buildersmart.in/sand');
    // name1('https://www.buildersmart.in/tmt-steel/fe-500-grade-tmt-bars');
    // name1('https://www.buildersmart.in/tmt-steel/fe-550-grade-tmt-bars');
    // name1('https://www.buildersmart.in/tmt-steel/tmt-binding-wire');
    // name1('https://www.buildersmart.in/bricks-blocks/concrete-solid-blocks');
    // name1('https://www.buildersmart.in/bricks-blocks/flyash-solid-blocks-291');
    // name1('https://www.buildersmart.in/bricks-blocks/autoclaved-aerated-concrete-aac-blocks');
    // name1('https://www.buildersmart.in/bricks-blocks/red-bricks');
    // name1('https://www.buildersmart.in/electrical/conduit-pipes-and-fittings');
    // name1('https://www.buildersmart.in/electrical/wires-and-cables');
    // name1('https://www.buildersmart.in/electrical/electric-panels');
    // name1('https://www.buildersmart.in/electrical/modular-switches-and-sockets');
    // name1('https://www.buildersmart.in/electrical/others');
    // name1('https://www.buildersmart.in/electrical/switch-gear-db-mcb-rccb-etc');
    // name1('https://www.buildersmart.in/plumbing-html/cpvc-pipes-and-fittings');
    // name1('https://www.buildersmart.in/plumbing-html/upvc-pipes-and-fittings');
    // name1('https://www.buildersmart.in/plumbing-html/swr-pipes-and-fittings');
    // name1('https://www.buildersmart.in/plumbing-html/swg-pipes');
    // name1('https://www.buildersmart.in/plumbing-html/specials-and-accessories');
    // name1('https://www.buildersmart.in/wooden-products/plywood');
    // name1('https://www.buildersmart.in/wooden-products/block-boards');
    // name1('https://www.buildersmart.in/wooden-products/decorative-laminates');
    // name1('https://www.buildersmart.in/wooden-products/veneers');
    // name1('https://www.buildersmart.in/tiles/floor-tiles');
    // name1('https://www.buildersmart.in/tiles/wall-tiles');
    // name1('https://www.buildersmart.in/tiles/parking-tiles');
    // name1('https://www.buildersmart.in/tiles/vitrified-tiles');
    // name1('https://www.buildersmart.in/bathroom-accessories/faucets');
    // name1('https://www.buildersmart.in/bathroom-accessories/showers');
    // name1('https://www.buildersmart.in/bathroom-accessories/sanitaryware');
    // name1('https://www.buildersmart.in/bathroom-accessories/other-accessories');
    // name1('https://www.buildersmart.in/hardware-fixtures/luxury-handles');
    // name1('https://www.buildersmart.in/hardware-fixtures/premium-handles');
    // name1('https://www.buildersmart.in/hardware-fixtures/stainless-steel-handles');
    // name1('https://www.buildersmart.in/hardware-fixtures/stainless-steel-pull-handles');
    // name1('https://www.buildersmart.in/hardware-fixtures/mortise-locks');
    // name1('https://www.buildersmart.in/hardware-fixtures/laches-and-hinges');
    // name1('https://www.buildersmart.in/hardware-fixtures/drawer-and-cabinet-hardware');
    // name1('https://www.buildersmart.in/hardware-fixtures/euro-profile-cylinders');
    // name1('https://www.buildersmart.in/paints-and-finishes/interiors');
    // name1('https://www.buildersmart.in/paints-and-finishes/decorative-paint-coating');
    // name1('https://www.buildersmart.in/paints-and-finishes/texture-finishes');
    name1('https://www.buildersmart.in/lighting-products/commercial-led-lighting');
    name1('https://www.buildersmart.in/lighting-products/outdoor-luminaires');
    name1('https://www.buildersmart.in/lighting-products/lighting-electronics-and-controls');
    // name1('https://www.buildersmart.in/naturalstones/granites');
    // name1('https://www.buildersmart.in/naturalstones/marbles');
    // name1('https://www.buildersmart.in/rmc-291');
    // name1('https://www.buildersmart.in/roofing-solutions');
    // name1('https://www.buildersmart.in/upvcdoors-windows/upvc-doors');
    // name1('https://www.buildersmart.in/upvcdoors-windows/upvc-windows');
    // name1('https://www.buildersmart.in/home-automation');
    // name1('https://www.buildersmart.in/home-decor/interior-exterior');
    // name1('https://www.buildersmart.in/home-decor/writing-boards');
    // name1('https://www.buildersmart.in/modular-kitchen/ro-system');
    // name1('https://www.buildersmart.in/modular-kitchen/accessories');
    // name1('https://www.buildersmart.in/construction-chemicals/adhesive');
    // name1('https://www.buildersmart.in/construction-chemicals/dry-mix');
    // name1('https://www.buildersmart.in/construction-chemicals/solvents');
    // name1('https://www.buildersmart.in/tmt-steel/couplers')
    console.log('started')
}

let pushAllDataMongod = (req, res) => {
    func();
    res.send('adding to the database wait for 5-6 mins')
}

module.exports = pushAllDataMongod;