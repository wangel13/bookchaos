import { objectType } from '@nexus/schema'

export const Book = objectType({
  name: 'Book',
  definition(t) {
    t.model.id()
    t.model.chapters()
    t.model.author()
    t.model.title()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.coAuthors()
    t.model.tags()
    t.model.published()
  },
})
