import { useQuery } from '@apollo/client'
import { withPhotos as getPhotos } from '../hoc/withPhotos'

export function useGetPhotos(categoryId) {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
