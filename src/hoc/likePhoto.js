import { gql } from '@apollo/client'

export const likePhoto = gql`
mutation likeAnomousPhoto ($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
