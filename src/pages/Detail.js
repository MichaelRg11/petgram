import React from 'react'
import { PhotoCardWithQuery } from './../container/useGetPhoto'

export const Detail = ({ detailId }) => {
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
