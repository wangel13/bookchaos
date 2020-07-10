import { objectType, extendType, stringArg } from '@nexus/schema'
import { getLoginSession } from '../../../lib/auth'
import { AuthenticationError } from 'apollo-server-micro'

export const Book = objectType({
  name: 'Book',
  definition(t) {
    t.model.id()
    t.model.chapters()
    t.model.authors()
    t.model.title()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.tags()
    t.model.published()
  },
})

export const BooksQueries = extendType({
  type: 'Query',
  definition: (t) => {
    t.crud.book()
  },
})

export const BooksMutations = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.deleteOneBook()
    t.field('createOneBook', {
      type: 'Book',
      args: { title: stringArg({ nullable: false }) },
      resolve: async (root, { title }, ctx) => {
        try {
          const session = await getLoginSession(ctx.req)
          if (session) {
            return ctx.prisma.book.create({
              data: {
                title,
                authors: { connect: { email: session.email } },
              },
            })
          }
        } catch (error) {
          throw new AuthenticationError('Authentication token is invalid, please log in')
        }
      },
    })
  },
})
