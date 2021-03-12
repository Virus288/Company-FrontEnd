import { gql } from "apollo-boost"

const getBooksQuery = gql`
{
    books {
    name
    id
    }
}
`

const getUserQuery = `
query ($Group: String!) {
    GroupUsers(Group: $Group){
    name
    id
    email
    }
}
`
const getUsersQuery = `
query{
    Users{
    name
    id
    email
    }
}
`

const getAuthorsQuery = gql`
{
    authors {
    name
    id
    }
}
`

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    id
    }
}
`

const getBookQuery = gql`
query ($id: ID) {
  book(id: $id) {
    id
    name
    genre
    author {
      id
      name
      age
      books {
        name
        id
      }
    }
  }
}

`

export {
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery,
    getUsersQuery,
    getUserQuery
}
