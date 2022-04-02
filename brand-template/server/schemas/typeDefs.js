const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        savedItem: [Item]
    }

    type Item {
        itemId: ID!
        collection: [String]
        description: String
        image: String
        link: String
        title: String!

    }

    type Auth {
        token: ID!
        user: User
      }

    input ItemInput {
        collection: [String]
        description: String!
        itemId: String!
        image: String
        link: String
        title: String!
      }
    
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveItem(itemData: ItemInput!): User
        removeItem(itemId: ID!): User
    }
`

module.exports = typeDefs;