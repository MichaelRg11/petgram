import React from 'react'
import { Button } from './style'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({ liked, likes, onClick }) => {

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button liked={liked} onClick={() => onClick(!liked)}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}
