import { getLoginSession } from 'lib/auth'
import { rule } from 'graphql-shield'

export const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
  const session = await getLoginSession(ctx.req)
  return Boolean(session)
})
