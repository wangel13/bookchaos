import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import Link from 'components/Link'

type ErrorAlert = {
  error: {
    message: string
  }
}

const ErrorAlert: React.FC<ErrorAlert> = ({ error }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error?.message} <Link href="/signout">signout</Link>
    </Alert>
  )
}

export default ErrorAlert
