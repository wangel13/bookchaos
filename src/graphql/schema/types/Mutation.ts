import { objectType, stringArg } from '@nexus/schema'
import { UserInputError } from 'apollo-server-micro'
import { createUser, validatePassword } from '../../../lib/user'
import { setLoginSession } from '../../../lib/auth'
import { removeTokenCookie } from '../../../lib/authCookies'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneBook()

    t.field('signUp', {
      type: 'User',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (parent, args, ctx) => {
        const rawUser = await createUser(args)
        try {
          const user = await ctx.prisma.user.create({
            data: rawUser,
          })

          if (user) {
            const session = {
              id: user.id,
              email: user.email,
            }

            await setLoginSession(ctx.res, session)

            return user
          }
        } catch (e) {
          throw new UserInputError('Sorry, this email already exist in BookChaos')
        }
      },
    })

    t.field('signIn', {
      type: 'User',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })

        if (user && (await validatePassword(user, password))) {
          const session = {
            id: user.id,
            email: user.email,
          }

          await setLoginSession(ctx.res, session)

          return user
        }

        throw new UserInputError('Invalid email and password combination')
      },
    })

    t.field('signOut', {
      type: 'SignOut',
      resolve: async (parent, args, ctx) => {
        removeTokenCookie(ctx.res)
        return {
          success: true,
        }
      },
    })
  },
})
