import { objectType } from '@nexus/schema'

export const Chapter = objectType({
  name: 'Chapter',
  definition(t) {
    t.model.id()
    t.model.book()
    t.model.author()
    t.model.title()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.coAuthors()
    t.model.tags()
    t.model.chapterLinksFrom()
    t.model.chapterLinksTo()
    t.model.published()
  },
})
