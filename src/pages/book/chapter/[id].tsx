import React from 'react'
import Head from 'next/head'
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import isNull from 'lodash/isNull'
import { makeStyles } from '@material-ui/styles'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from '@material-ui/lab/Skeleton'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import DashboardLayout from 'layouts/DashboardLayout'
import ChapterEditor from 'components/ChapterEditor'
import BookChaptersExtension from 'components/BookChaptersExtension'
import Link from 'components/Link'
import { getOneChapter } from 'apollo/queries/chapter'
import AuthWrapper from 'components/AuthWrapper'
import ErrorAlert from 'components/ErrorAlert'

const layoutExtensionConfig = {
  name: 'ChapterPageExtensions',
  apps: [
    {
      name: 'BookChapters',
      title: 'Book chapters',
      icon: BookmarksRoundedIcon,
      component: BookChaptersExtension,
    },
  ],
}

const useStyles = makeStyles(() => ({
  grid: {
    height: `100%`,
  },
  bookTitle: {
    fontWeight: 500,
  },
}))

const Chapter: NextPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(getOneChapter, {
    variables: { id },
    skip: !id,
    fetchPolicy: 'cache-and-network',
  })

  if (isNull(data?.chapter)) {
    router.push('/404')
  }

  if (error) {
    return <ErrorAlert error={error} />
  }

  const handleClickPreview = (id) => {
    window.open(`/read/chapter/${id}`, '_blank')
  }

  return (
    <AuthWrapper>
      <Head>
        <title>{loading ? `Chapter loading...` : `Chapter: ${data?.chapter?.title}`}</title>
      </Head>

      <DashboardLayout
        bgPaper
        layoutExtensionConfig={layoutExtensionConfig}
        queryParams={{ chapterId: id, bookId: data?.chapter?.book?.id }}
      >
        <Box maxWidth={700} px={2} mx="auto" height="100%">
          <Grid
            container
            className={classes.grid}
            direction="column"
            wrap="nowrap"
            justify="flex-start"
            alignItems="stretch"
          >
            <Grid item>
              <Box pt={4} pb={4}>
                {loading ? (
                  <>
                    <Skeleton height={60} />
                    <Box pt={2} pb={1}>
                      <Divider />
                    </Box>
                    <Skeleton />
                  </>
                ) : (
                  <>
                    <Typography variant="h4" component="h1" className={classes.bookTitle}>
                      <Link href="/book/[id]" as={`/book/${data?.chapter?.book?.id}`}>
                        {data?.chapter?.book?.title}
                      </Link>
                      : {data?.chapter?.title}{' '}
                    </Typography>
                    <Box pt={2} pb={1}>
                      <Divider />
                    </Box>
                    <IconButton
                      onClick={() => handleClickPreview(data?.chapter?.id)}
                      size="small"
                      title="Preview as reader"
                      edge="start"
                      aria-label="Preview as reader"
                    >
                      <PlayArrowRoundedIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs>
              {loading ? (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton width="60%" />
                </>
              ) : (
                <ChapterEditor chapter={data?.chapter} />
              )}
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </AuthWrapper>
  )
}

export default Chapter
