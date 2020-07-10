import gql from 'graphql-tag'

export const createOneChapter = gql`
  mutation createOneChapter($bookId: String!, $title: String!) {
    createOneChapter(title: $title, bookId: $bookId) {
      id
      title
    }
  }
`

export const deleteOneChapter = gql`
  mutation deleteOneChapter($id: String!) {
    deleteOneChapter(where: { id: $id }) {
      id
      title
    }
  }
`

export const updateOneChapter = gql`
  mutation updateOneChapter($id: String!, $content: Json!) {
    updateOneChapter(where: { id: $id }, data: { content: $content }) {
      id
      title
    }
  }
`

export const getOneChapter = gql`
  query getOneChapter($id: String!) {
    chapter(where: { id: $id }) {
      id
      title
      content
      createdAt
      authors {
        id
        name
      }
      book {
        id
        title
      }
      published
      tags {
        id
        title
      }
      fromChapters {
        title
        toChapter {
          id
          title
        }
        fromChapter {
          id
          title
        }
      }
      toChapters {
        title
        toChapter {
          id
          title
        }
        fromChapter {
          id
          title
        }
      }
    }
  }
`
