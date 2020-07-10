import { allow, shield } from 'graphql-shield'
import { isAuthenticated } from './rules/isAuthenticated'

export const permissions = shield({
  Query: {
    '*': isAuthenticated,
    // me: allow,
  },
  Mutation: {
    '*': isAuthenticated,
    signUp: allow,
    signIn: allow,
    signOut: allow,
  },
})
