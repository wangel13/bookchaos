import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Link from 'components/Link'
import RegisterForm from 'components/RegisterForm'

const useStyles = makeStyles((theme) => ({
  signUpGrid: {
    height: '100vh',
    backgroundImage: `linear-gradient(15deg, ${theme.palette.primary.main} 50%, #8c73ce 100%)`,
  },
  signUp: {
    ...theme.mixins.gutters(),
    maxWidth: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const SignUp = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.signUpGrid} container direction="row" justify="center" alignItems="center">
      <Paper className={classes.signUp} elevation={1}>
        <Typography gutterBottom variant="h5" align="center">
          Sign up
        </Typography>
        <RegisterForm />
        <Typography variant="overline">
          Already have account? <Link href="/signin">Sign in</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default SignUp
