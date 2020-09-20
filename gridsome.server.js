
const homeConfig = require("./config/home_config.json")


module.exports = function (api) {
    api.loadSource(async actions => {
        console.log(actions)
        
        const items = homeConfig.items


        actions.schema.createUnionType({
            name: 'Content',
            types: [ 'Quote' ]
        })


        const Items = actions.getCollection('Item').data() 

        const HomeItem = actions.addCollection('HomeItem')
        HomeItem.addReference('item', 'Item')
       

        for (const item of items) {
            if(item.template === "home-page-item"){
                    const path = "/" + item.select_a_drawing.split("/")[1].split(".")[0] + "/"
                    const itemId = Items.find(item => item.path === path).id
                    console.log(itemId)
                    HomeItem.addNode({
                        ...item,
                        item : itemId
                    })
            }
            if(item.template === "quote"){
                HomeItem.addNode({
                    ...item
                })
            }
        }



        

    })
}