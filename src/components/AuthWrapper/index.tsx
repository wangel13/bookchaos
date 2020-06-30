import React from 'react'
import useMe from 'hooks/useMe'

import CenteredLayout from 'layouts/CenteredLayout'
import FullLogo from 'components/Logo/FullLogo'
import ErrorAlert from 'components/ErrorAlert'

const AuthWrapper: React.FC = ({ children }) => {
  const { me, error } = useMe()

  if (error) {
    return <ErrorAlert error={error} />
  }

  if (me) {
    return <>{children}</>
  }

  return (
    <CenteredLayout>
      <FullLogo mini />
    </CenteredLayout>
  )
}

export default AuthWrapper
