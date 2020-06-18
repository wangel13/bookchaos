import React from 'react'
import gql from 'graphql-tag'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

import { SignInForm } from './SignInForm'

const SignInMutation = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`

const SignIn = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const apolloClient = useApolloClient()
  const [signIn, { data, error, loading }] = useMutation(SignInMutation)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await apolloClient.resetStore()
      const { data } = await signIn({
        variables: {
          ...values,
        },
      })
      if (data.signIn.email) {
        await router.push('/')
      }
    } catch (error) {
      const errorMsgs = error.graphQLErrors.map(({ message }) => message)
      enqueueSnackbar(`Some errors, sir: ${errorMsgs.join(`,`)}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
      setSubmitting(false)
    }
  }

  return <SignInForm onSubmit={handleSubmit} />
}

export default SignIn
