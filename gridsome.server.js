const homeResources = require( "./config/home_config.json")

module.exports = (api) => {
    api.loadSource((actions) => {

        const ResourceType = actions.schema.createUnionType({
            name: "Resource",
            types: ["Quote", "Item"],
            resolveType: (obj) => obj.component
        });
    
        const QuoteType = actions.schema.createObjectType({
            name: "Quote",
            interfaces: ["Node"],
            fields: {
            id: "ID!",
            quote: "String",
            component: "String!"
            }
        });
    

        actions.addSchemaTypes([ResourceType, QuoteType]);
    
        const pages = actions.addCollection("HomePage");
        const quoteCollection = actions.addCollection("Quote");
        const Items = actions.getCollection("Item").data()

        let refs = [];

        homeResources.items.map((item,index) => {
                if(item.template === "quote"){
                    const node = quoteCollection.addNode({
                        quote : item.quote,
                        component : "Quote"
                    })
                    refs.push(actions.createReference(node))
                }
                if(item.template === "home-page-item"){
                    const path = '/' + item.item_referance.split('/')[1].split('.')[0] + '/'
                    const Item = Items.find(i => i.path === path)
                    refs.push({typeName: 'Item', id: Item.id})
                }
        })

        pages.addNode({
            name: "Home",
            resources: refs
        });


    });
  };
  