import gql from 'graphql-tag'

export const getBook = gql`
  query getBook($id: String!) {
    book(where: { id: $id }) {
      id
      title
      createdAt
      authors {
        id
        name
      }
      published
      tags {
        id
        title
      }
      chapters {
        id
        title
        createdAt
        book {
          id
        }
        authors {
          id
          name
        }
      }
    }
  }
`

export const getBookChapters = gql`
  query getBookChapters($id: String!) {
    book(where: { id: $id }) {
      id
      chapters {
        id
        title
        book {
          id
        }
        fromChapters {
          fromId
          toId
        }
        toChapters {
          fromId
          toId
        }
      }
    }
  }
`
