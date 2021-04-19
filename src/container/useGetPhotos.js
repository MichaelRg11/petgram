import { useQuery } from '@apollo/client'
import { withPhotos as getPhotos } from '../hoc/withPhotos'

export const useGetPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
