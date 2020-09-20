
const homeConfig = require("./config/home_config.json")


module.exports = function (api) {
    api.loadSource(async actions => {
        
        

        const collection = actions.addCollection({
            typeName: 'HomeTiles'
        })

        collection.addReference('item', 'Item')

        const Items = actions.getCollection("Item").data()

        actions.schema.createUnionType({
            name: 'HomeTiles',
            types: [ 'Quote','Item' ]
        })


        //-----only for testing-------//
        homeConfig.items.forEach((item,i)=>{

            console.log(item,i)

            let type
            if(item.template === "quote"){
                collection.addNode({
                    ...item,
                    type : "quote"
                })
            }
            if(item.template === "home-page-item"){
                const path = "/" + item.item_referance.split("/")[1].split(".")[0] + "/"
                const itemId = Items.find(item => item.path === path).id
                collection.addNode({
                    ...item,
                    item : itemId,
                    type : "item"
                })
            }
            
            

        })
        //-----only for testing-------//


        console.log(collection.data())

    })
}