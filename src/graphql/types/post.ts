import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        getAllPosts: [Post!]!
    }

    type Post {
        title:          String!
        content:        String!
        featuredImage:  String
        createAt:       String
        updatedAt:      String
    }
`;