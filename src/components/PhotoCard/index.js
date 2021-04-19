import React from 'react'
import { Article, ImgWrapper, Img } from './style'
import { FavButton } from './../FavButton'
import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useNearScreen } from './../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/useToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAUL_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAUL_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  const { mutation } = useMuationToogleLike()
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={ref}>
      {
        show && <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />

        </React.Fragment>
      }
    </Article>
  )
}
