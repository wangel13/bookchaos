import { extendType, objectType, stringArg } from '@nexus/schema'

export const ChapterLink = objectType({
  name: 'ChapterLink',
  definition(t) {
    t.model.title()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.fromChapter()
    t.model.fromId()
    t.model.toChapter()
    t.model.toId()
  },
})

export const ChapterLinkMutations = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.createOneChapterLink()
  },
})
