import { objectType } from '@nexus/schema'

export const ChapterLink = objectType({
  name: 'ChapterLink',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.fromChapter()
    t.model.toChapter()
  },
})
