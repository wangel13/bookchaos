import React from 'react'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

import TextRenderer from './components/TextRenderer'
import ChapterLinksList from './components/ChapterLinksList'
import { ChapterGetPayload } from '@prisma/client'

type ChapterWithAuthors = ChapterGetPayload<{
  include: { authors: true; book: true; fromChapters: true; toChapters: true }
}>

type ReadChapter = {
  chapter: ChapterWithAuthors
}

const ReadChapter: React.FC<ReadChapter> = ({ chapter: { content, fromChapters } }) => (
  <>
    <TextRenderer content={content} />
    <Box pb={5} pt={3}>
      <Divider />
      <ChapterLinksList
        // TODO: find way to make correct typing of nested chapters
        // @ts-ignore
        chapterLinksFrom={fromChapters}
      />
    </Box>
  </>
)

export default ReadChapter
