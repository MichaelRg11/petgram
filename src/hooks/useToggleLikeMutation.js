import { likePhoto } from '../hoc/likePhoto'
import { useMutation } from '@apollo/client'

export const useMuationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(likePhoto)
  return { mutation, mutationLoading, mutationError }
}
