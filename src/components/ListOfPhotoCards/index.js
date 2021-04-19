import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Loading } from './../../styles/animation'
import { useGetPhotos } from '../../container/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <Loading />

  if (error) return <h3>error inesperado</h3>

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}
