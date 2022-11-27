import graphql from "graphql";
import { buildSchema } from "graphql";

const schemaProducts = buildSchema(`
    type Products {
        id: ID!
        name: String,
        description: String,
        price: Int,
        stock: Int
    }
    input ProductInput{
        name: String,
        description: String,
        price: Int,
        stock: Int
    }
    type Query {
        getProductsServices(field: String, value: String): [Products]
    }
    type Mutation{
        postProductService(data: ProductInput): Products,
    }
`);

export default schemaProducts;
