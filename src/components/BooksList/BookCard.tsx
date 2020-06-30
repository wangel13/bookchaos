import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import CropOriginalIcon from '@material-ui/icons/CropOriginalRounded'
import Box from '@material-ui/core/Box'
import dayjs from 'dayjs'

import BookCardMenu from './ContextMenu'
import Link from 'components/Link'
import { getGravatar } from 'lib/gravatar'
import { BookGetPayload } from '@prisma/client'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`,
    width: `175px`,
  },
  media: {
    objectFit: `cover`,
    height: 140,
  },
  imagePlaceholderIcon: {},
}))

const ImagePlaceholder: React.FC = () => (
  <Box height="140px" textAlign="center" pt={6}>
    <CropOriginalIcon color="disabled" fontSize="large" />
  </Box>
)

type BookWithAuthors = BookGetPayload<{
  include: { authors: true }
}>

type BookCard = {
  book: BookWithAuthors
  withCardActions?: boolean
}

const BookCard: React.FC<BookCard> = ({ book: { id, title, updatedAt, authors }, withCardActions }) => {
  const classes = useStyles()
  //TODO: add many authors avatars

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} href="/book/[id]" as={`/book/${id}`}>
        <CardMedia className={classes.media} title={title}>
          <ImagePlaceholder />
        </CardMedia>
      </CardActionArea>
      <CardHeader
        avatar={
          <Avatar
            src={getGravatar(authors[0]?.emailHash)}
            variant="rounded"
            alt={authors[0]?.name}
            title={authors[0]?.name}
            aria-label="Recipe"
            className={classes.avatar}
          />
        }
        action={<BookCardMenu id={id} />}
        title={title}
        titleTypographyProps={{ title, className: classes.title }}
        subheader={dayjs(updatedAt).format('LLL')}
      />
      {withCardActions && (
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default BookCard
