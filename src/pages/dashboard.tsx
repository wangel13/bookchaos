import React from 'react'
import { NextPage } from 'next'
import Box from '@material-ui/core/Box'
import Head from 'next/head'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import DashboardLayout from 'layouts/DashboardLayout'
import AuthWrapper from 'components/AuthWrapper'
import BooksList from 'components/BooksList'
import ErrorAlert from '../components/ErrorAlert'

export const myBooks = gql`
  query myBooks {
    me {
      id
      books {
        id
        title
        createdAt
        authors {
          id
          name
          emailHash
        }
        published
        tags {
          id
          title
        }
      }
    }
  }
`

const Dashboard: NextPage = () => {
  const { data, loading, error } = useQuery(myBooks)
  console.log(data)

  if (error) {
    return <ErrorAlert error={error} />
  }

  const books = data?.me?.books

  return (
    <AuthWrapper>
      <Head>
        <title>BookChaos - write a book app</title>
      </Head>
      <DashboardLayout>
        <Box p={2}>
          <BooksList loading={loading} books={books} />
        </Box>
      </DashboardLayout>
    </AuthWrapper>
  )
}

export default Dashboard
