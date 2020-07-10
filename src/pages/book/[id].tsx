import React from 'react'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import { useQuery } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skeleton from '@material-ui/lab/Skeleton'
import { NextPage } from 'next'

import DashboardLayout from 'layouts/DashboardLayout'
import ChaptersList from 'components/ChaptersList'
import AuthWrapper from 'components/AuthWrapper'
import { useRouter } from 'next/router'
import ErrorAlert from 'components/ErrorAlert'
import { getBook } from 'apollo/queries/book'
import isNull from 'lodash/isNull'

// const layoutExtensionConfig = {
//   // TODO: move to layout
//   name: 'BookPageExtensions',
//   apps: [
//     // {
//     //   name: 'Chapters manager',
//     //   component: CardsManager,
//     // },
//     {
//       name: 'Cards',
//       icon: DescriptionRoundedIcon,
//       component: CardsManager,
//     },
//     {
//       name: 'Cards2',
//       icon: DescriptionRoundedIcon,
//       component: CardsManager,
//     },
//     // {
//     //   name: 'Tasks manager',
//     //   component: CardsManager,
//     // },
//   ],
// }

const useStyles = makeStyles((theme) => ({
  skeleton: {
    height: 64,
    borderRadius: 3,
    marginBottom: theme.spacing(2),
  },
  bookTitle: {
    fontWeight: 500,
  },
}))

const Book: NextPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(getBook, {
    variables: { id },
    skip: !id,
    fetchPolicy: 'cache-and-network',
  })

  if (isNull(data?.book)) {
    router.push('/404')
  }

  if (error) {
    return <ErrorAlert error={error} />
  }

  return (
    <AuthWrapper>
      <Head>
        <title>{loading ? `Book loading...` : data?.book?.title}</title>
      </Head>

      <DashboardLayout
        // layoutExtensionConfig={layoutExtensionConfig}
        queryParams={{ bookId: id }}
      >
        <Box maxWidth={700} px={2} mx="auto">
          <Box pt={4} pb={5}>
            {loading ? (
              <Skeleton height={60} />
            ) : (
              <Typography variant="h4" gutterBottom component="h1" className={classes.bookTitle}>
                {data?.book?.title}
              </Typography>
            )}
            {loading ? (
              <Skeleton width="30%" />
            ) : (
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Add authors [] */}
                by {data?.book?.authors[0].name}
              </Typography>
            )}
          </Box>
          {loading ? (
            <>
              <Skeleton variant="rect" className={classes.skeleton} />
              <Skeleton variant="rect" className={classes.skeleton} />
              <Skeleton variant="rect" className={classes.skeleton} />
            </>
          ) : (
            <ChaptersList bookId={id} chapters={data?.book?.chapters} />
          )}
        </Box>
      </DashboardLayout>
    </AuthWrapper>
  )
}

export default Book
