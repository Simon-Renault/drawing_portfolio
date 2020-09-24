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
      const ItemType = actions.schema.createObjectType({
        name: "Item",
        interfaces: ["Node"],
        fields: {
          id: "ID!",
          title: "String",
          content: "String",
          component: "String!"
        }
      });
  
      actions.addSchemaTypes([ResourceType, QuoteType, ItemType]);
  
      const pages = actions.addCollection("HomePage");
      const quoteCollection = actions.addCollection("Quote");
      const ItemCollection = actions.addCollection("Item");
  
      const q1 = quoteCollection.addNode({
        component: "Quote",
        quote: "a simple quote" + Math.random() * 100
      });
  
      const i1 = ItemCollection.addNode({
        component: "Item",
        title: "a simple title" + Math.random() * 100,
        content: "lorem ipsum dolor sit amet"
      });
  
      const q2 = quoteCollection.addNode({
        component: "Quote",
        quote: "a simple quote" + Math.random() * 100
      });

      const refs = [q1, q2, i1].map((node) => actions.createReference(node))

      console.log(refs)
  
      pages.addNode({
        name: "Home",
        resources: refs
      });


    });
  };
  