import React from 'react'
import Typography from '@material-ui/core/Typography'
import useMe from 'hooks/useMe'
import Box from '@material-ui/core/Box'
import Head from 'next/head'

import DashboardLayout from 'layouts/DashboardLayout'

const Index = () => {
  const { me, error } = useMe()

  if (error) {
    return <Typography variant="h1">{error.message}</Typography>
  }

  if (me) {
    return (
      <>
        <Head>
          <title>BookChaos - write a book app</title>
        </Head>
        <DashboardLayout>
          <Box p={2}>
            <Typography variant="h5">{me?.email} - It&apos;s works!</Typography>
          </Box>
        </DashboardLayout>
      </>
    )
  }

  return <Typography variant="h1">Loading...</Typography>
}

export default Index
