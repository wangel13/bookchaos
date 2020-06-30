import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'

import Box from '@material-ui/core/Box'
import Link from 'components/Link'
import SignInForm from 'components/SignInForm'
import FullLogo from 'components/Logo/FullLogo'
import CenteredLayout from 'layouts/CenteredLayout'

const useStyles = makeStyles((theme) => ({
  signIn: {
    ...theme.mixins.gutters(),
    maxWidth: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const SignIn: NextPage = () => {
  const classes = useStyles()

  return (
    <CenteredLayout>
      <Box pb={4}>
        <FullLogo />
      </Box>
      <Paper className={classes.signIn} elevation={1}>
        <Box pt={1}>
          <SignInForm />
          <Typography variant="overline">
            New? <Link href="/signup">Create account</Link>
          </Typography>
        </Box>
      </Paper>
    </CenteredLayout>
  )
}

export default SignIn
