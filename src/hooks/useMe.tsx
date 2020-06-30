import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const MeQuery = gql`
  query ViewerQuery {
    me {
      id
      email
    }
  }
`

const useMe = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery(MeQuery)
  const me = data?.me
  const shouldRedirect = !(loading || error || me)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/signin')
    }
  }, [shouldRedirect])

  return {
    me,
    loading,
    error,
  }
}

export default useMe
