import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import FullLogo from 'components/Logo/FullLogo'
import gql from 'graphql-tag'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import CenteredLayout from 'layouts/CenteredLayout'

const SignOutMutation = gql`
  mutation SignOut {
    signOut {
      success
    }
  }
`

const useStyles = makeStyles((theme) => ({
  signIn: {
    ...theme.mixins.gutters(),
    maxWidth: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const SignOut: NextPage = () => {
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
    <CenteredLayout>
      <Box pb={4}>
        <FullLogo mini />
      </Box>
      <Paper className={classes.signIn} elevation={1}>
        <Box pt={1}>
          <Typography variant="overline">Signing out...</Typography>
        </Box>
      </Paper>
    </CenteredLayout>
  )
}

export default SignOut
