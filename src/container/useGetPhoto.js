import React from 'react'
import { getSinglePhoto } from './../hoc/getSinglePhoto'
import { PhotoCard } from './../components/PhotoCard'
import { Query } from '@apollo/client/react/components'
import { Loading } from './../styles/animation'

const renderProps = ({ loading, error, data }) => {
  if (loading) return <Loading />

  if (error) return <h3>error inesperado</h3>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={getSinglePhoto} variables={{ id }}>
    {
      renderProps
    }
  </Query>
)
