import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Head from 'next/head'
import Link from 'components/Link'

import DashboardLayout from 'layouts/DashboardLayout'
import AuthWrapper from 'components/AuthWrapper'

const Index = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>📖BookChaos - writing app</title>
      </Head>
      <DashboardLayout>
        <Box p={2}>
          <Typography variant="h5">It&apos;s works!</Typography>
          <Link href="/dashboard">Go to dashboard</Link>
        </Box>
      </DashboardLayout>
    </AuthWrapper>
  )
}

export default Index
