import { gql } from '@apollo/client';

export const withPhotos = gql`
query getPhoto($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
