const BuilderSmartData = require('../model/buildersmartdata');

renameCategoryNames = async(req, res) => {
    try {

        const Cement = await BuilderSmartData.updateMany({ category: "cement" }, { $set: { category: "Cement" } })
        const Steel = await BuilderSmartData.updateMany({ category: "tmt-steel" }, { $set: { category: "Steel" } })
        const Pipes = await BuilderSmartData.updateMany({ category: "plumbing-html" }, { $set: { category: "Pipes" } })
        const Sannitary = await BuilderSmartData.updateMany({ subcategory: "sanitaryware" }, { $set: { category: "Sanitary" } })
        const Wood = await BuilderSmartData.updateMany({ category: "wooden-products" }, { $set: { category: "Wood" } })
        const Marble = await BuilderSmartData.updateMany({ category: "naturalstones" }, { $set: { category: "Marble" } })
        const Bricks = await BuilderSmartData.updateMany({ category: "bricks-blocks" }, { $set: { category: "Bricks" } })
        const Electrical = await BuilderSmartData.updateMany({ category: "electrical" }, { $set: { category: "Electrical" } })
        const Paints = await BuilderSmartData.updateMany({ category: "paints-and-finishes" }, { $set: { category: "Paints" } })
        const Sand = await BuilderSmartData.updateMany({ category: "sand" }, { $set: { category: "Sand" } })
        const RMC = await BuilderSmartData.updateMany({ category: "rmc-291" }, { $set: { category: "Ready Mix Concrete" } })
        const GlassHardware = await BuilderSmartData.updateMany({ category: "glass-hardware" }, { $set: { category: "Glass-Hardware" } })

        console.log("Done editing category names")

        res.send('Done editing category names')
    } catch (error) {
        console.log(error)
    }
}


module.exports = renameCategoryNames