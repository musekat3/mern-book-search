import gql from 'graphql-tag';

export const GET_ME = gql`
 query me {
   me {
     id
     email
     username
   }
 }
`;