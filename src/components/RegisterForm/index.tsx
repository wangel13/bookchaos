import gql from 'graphql-tag'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

import SignUpForm from './SignUpForm'

const SignUpMutation = gql`
  mutation SignUpMutation($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      id
      email
    }
  }
`

const RegisterForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const apolloClient = useApolloClient()
  const [signUp, { data, error, loading }] = useMutation(SignUpMutation)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await apolloClient.resetStore()
      const { data } = await signUp({
        variables: {
          ...values,
        },
      })
      if (data.signUp.email) {
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

  return <SignUpForm onSubmit={handleSubmit} />
}

export default RegisterForm
