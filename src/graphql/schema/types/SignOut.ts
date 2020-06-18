import { objectType } from '@nexus/schema'

export const SignOut = objectType({
  name: 'SignOut',
  definition(t) {
    t.boolean('success')
  },
})
