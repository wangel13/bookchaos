import gql from 'graphql-tag'

export const getChapterLinksByBookId = gql`
  query getChapterLinksByBookId($bookId: String!) {
    chapterLinks(where: { bookId: $bookId }) {
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

export const createOneChapterLink = gql`
  mutation createOneChapterLink($data: ChapterLinkCreateInput!) {
    createOneChapterLink(data: $data) {
      title
    }
  }
`
