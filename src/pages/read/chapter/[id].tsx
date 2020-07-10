import React from 'react'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from '@material-ui/lab/Skeleton'
import { NextPage } from 'next'

import DashboardLayout from 'layouts/DashboardLayout'
import Link from 'components/Link'
import ReadChapter from 'components/ReadChapter'
import AuthWrapper from 'components/AuthWrapper'
import { useRouter } from 'next/router'
import { getOneChapter } from 'apollo/queries/chapter'
import ErrorAlert from 'components/ErrorAlert'

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

  if (error) return <ErrorAlert error={error} />

  return (
    // TODO: Check publish
    <AuthWrapper>
      <Head>
        <title>{loading ? `Chapter loading...` : `Chapter: ${data?.chapter?.title}`}</title>
      </Head>

      <DashboardLayout bgPaper queryParams={{ chapterId: id, bookId: data?.chapter?.book?.id }}>
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
                  <Skeleton height={60} />
                ) : (
                  <Typography variant="h4" component="h1" className={classes.bookTitle}>
                    {/* TODO: link to book read cover or hide for not author */}
                    <Link href="/book/[id]" as={`/book/${data?.chapter?.book?.id}`}>
                      {data?.chapter?.book?.title}
                    </Link>
                    : {data?.chapter?.title}{' '}
                  </Typography>
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
                <ReadChapter chapter={data?.chapter} />
              )}
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </AuthWrapper>
  )
}

export default Chapter
