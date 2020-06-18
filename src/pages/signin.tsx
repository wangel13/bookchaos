import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Link from 'components/Link'
import SignInForm from 'components/SignInForm'
import FullLogo from 'components/Logo/FullLogo'

const useStyles = makeStyles((theme) => ({
  signInGrid: {
    height: '100vh',
    backgroundImage: `linear-gradient(15deg, ${theme.palette.primary.main} 50%, #8c73ce 100%)`,
  },
  signIn: {
    ...theme.mixins.gutters(),
    maxWidth: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const SignIn = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.signInGrid} container direction="row" justify="center" alignItems="center">
      <Grid item>
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
      </Grid>
    </Grid>
  )
}

export default SignIn
