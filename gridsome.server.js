
const homeConfig = require("./config/home_config.json")


module.exports = function (api) {
    api.loadSource(async actions => {
        
        actions.addSchemaTypes(`
            type Quote {
                id: ID!
                quote: String
            }

            type XItem {
                id: ID!
                title: String
                text_content: String
            }
        `)


        actions.schema.createUnionType({
            name: 'Resource',
            types: ['Quote', 'XItem'],
            resolveType(obj) {
              if (obj.__component === 'Quote') return 'Quote';
              if (obj.__component === 'XItem') return 'XItem';
            }
        })


        const collection = actions.addCollection({
            typeName: 'Resource'
        })


        //-----only for testing-------//

        collection.addNode({
            __component : "Quote",
            quote : "a simple quote" + Math.random() * 100
        })
        
        collection.addNode({
            __component : "XItem",
            title : "a simple title" + Math.random() * 100,
            content : "lorem ipsum dolor sit amet"
        })

        collection.addNode({
            __component : "Quote",
            quote : "a simple quote" + Math.random() * 100
        })

        //-----only for testing-------//

        console.log(collection.data())

    })
}