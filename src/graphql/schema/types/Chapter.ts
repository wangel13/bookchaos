import { extendType, objectType, stringArg } from '@nexus/schema'
import { getLoginSession } from '../../../lib/auth'
import { AuthenticationError } from 'apollo-server-micro'

export const Chapter = objectType({
  name: 'Chapter',
  definition(t) {
    t.model.id()
    t.model.book()
    t.model.authors()
    t.model.title()
    t.model.content()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.tags()
    t.model.fromChapters()
    t.model.toChapters()
    t.model.published()
  },
})

export const ChapterQueries = extendType({
  type: 'Query',
  definition: (t) => {
    t.crud.chapter()
  },
})

export const ChapterMutations = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.deleteOneChapter()
    t.crud.updateOneChapter()
    t.field('createOneChapter', {
      type: 'Chapter',
      args: { title: stringArg({ nullable: false }), bookId: stringArg({ nullable: false }) },
      resolve: async (root, { title, bookId }, ctx) => {
        try {
          const session = await getLoginSession(ctx.req)
          if (session) {
            return ctx.prisma.chapter.create({
              data: {
                title,
                content: [
                  {
                    type: 'paragraph',
                    children: [{ text: '' }],
                  },
                ],
                book: { connect: { id: bookId } },
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
