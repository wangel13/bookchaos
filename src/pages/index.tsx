import React from 'react'
import Typography from '@material-ui/core/Typography'
import withMe from 'hooks/withMe'

import Link from 'components/Link'

const Index = () => {
  const { me, error } = withMe()

  if (error) {
    return <Typography variant="h1">{error.message}</Typography>
  }

  if (me) {
    return (
      <div>
        <Link href="/signout">SignOut</Link>
        <Typography variant="h1">{me?.email} It's works! BooooooooooOOooookChaooooOooooos!</Typography>
      </div>
    )
  }

  return <Typography variant="h1">Loading...</Typography>
}

export default Index
