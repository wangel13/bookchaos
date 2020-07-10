import React from 'react'
import isEmpty from 'lodash/isEmpty'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowForwardRounded from '@material-ui/icons/ArrowForwardRounded'
import ListSubheader from '@material-ui/core/ListSubheader'
import Divider from '@material-ui/core/Divider'
import { ChapterLinkGetPayload } from '@prisma/client'

import Link from 'components/Link'

const EndOfLine: React.FC = () => (
  <ListItem button component={Link} href="/" as={`/`}>
    <ListItemIcon>
      <ArrowForwardRounded />
    </ListItemIcon>
    <ListItemText primary="You reached the end of the path. Go to find something else?" />
  </ListItem>
)

type ChapterLinkWithChapters = ChapterLinkGetPayload<{
  include: { toChapter: true; fromChapter: true }
}>

type ChapterLinksList = {
  chapterLinksFrom: ChapterLinkWithChapters[]
}

const ChapterLinksList: React.FC<ChapterLinksList> = ({ chapterLinksFrom }) => {
  return (
    <List
      component="nav"
      aria-label="chapter links"
      subheader={<ListSubheader component="div">What`s next?</ListSubheader>}
    >
      <Divider />
      {isEmpty(chapterLinksFrom) && <EndOfLine />}
      {chapterLinksFrom.map(({ title, toChapter: { id } }) => {
        return (
          <ListItem button key={id} component={Link} href="/read/chapter/[id]" as={`/read/chapter/${id}`}>
            <ListItemIcon>
              <ArrowForwardRounded />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default ChapterLinksList
