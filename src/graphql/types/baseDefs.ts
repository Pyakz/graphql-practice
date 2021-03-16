import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        hello: String!
    }

    type Mutation {
        _:String!
    }

    type Subscriptions {
        _:String!
    }
`;