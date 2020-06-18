import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import FullLogo from 'components/Logo/FullLogo'
import gql from 'graphql-tag'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const SignOutMutation = gql`
  mutation SignOut {
    signOut {
      success
    }
  }
`

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

const SignOut = () => {
  const classes = useStyles()
  const client = useApolloClient()
  const router = useRouter()
  const [signOut] = useMutation(SignOutMutation)

  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        router.push('/signin')
      })
    })
  }, [signOut, router, client])

  return (
    <Grid className={classes.signInGrid} container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Box pb={4}>
          <FullLogo />
        </Box>
        <Paper className={classes.signIn} elevation={1}>
          <Box pt={1}>
            <Typography variant="overline">Signing out..</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SignOut
