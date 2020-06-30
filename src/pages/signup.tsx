import React from 'react'
import { NextPage } from 'next'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Link from 'components/Link'
import RegisterForm from 'components/RegisterForm'
import CenteredLayout from 'layouts/CenteredLayout'

const useStyles = makeStyles((theme) => ({
  signUp: {
    ...theme.mixins.gutters(),
    maxWidth: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const SignUp: NextPage = () => {
  const classes = useStyles()

  return (
    <CenteredLayout>
      <Paper className={classes.signUp} elevation={1}>
        <Typography gutterBottom variant="h5" align="center">
          Sign up
        </Typography>
        <RegisterForm />
        <Typography variant="overline">
          Already have account? <Link href="/signin">Sign in</Link>
        </Typography>
      </Paper>
    </CenteredLayout>
  )
}

export default SignUp
