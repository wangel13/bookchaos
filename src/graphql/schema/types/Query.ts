import { objectType } from '@nexus/schema'
import { AuthenticationError } from 'apollo-server-micro'
import { getLoginSession } from '../../../lib/auth'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.user()

    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: async (parent, args, ctx) => {
        try {
          const session = await getLoginSession(ctx.req)

          if (session) {
            return ctx.prisma.user.findOne({
              where: {
                email: session.email,
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
