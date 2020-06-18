import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    // t.model.password()
    // t.model.passwordSalt()
    t.model.emailHash()
    t.model.books()
    t.model.chapters()
    t.model.role()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
