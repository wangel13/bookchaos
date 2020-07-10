import React from 'react'
import { motion } from 'framer-motion'
import { ChapterGetPayload } from '@prisma/client'

import ChapterCard from './ChapterCard'
import ChapterAdd from '../ChapterAdd'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

type ChapterWithAuthors = ChapterGetPayload<{
  include: { authors: true; book: true }
}>

type ChaptersList = {
  chapters: [ChapterWithAuthors]
  bookId: string | string[]
}

const ChaptersList: React.FC<ChaptersList> = ({ chapters, bookId }) => (
  <motion.div variants={variants} initial="closed" animate="open">
    <ChapterAdd bookId={bookId} />
    {chapters.map((chapter) => (
      <ChapterCard key={chapter.id} chapter={chapter} />
    ))}
  </motion.div>
)

export default ChaptersList
