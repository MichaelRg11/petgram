import { login } from '../hoc/loginMutation'
import { useMutation } from '@apollo/client'

export const useLoginMutation = () => {
  const [loginMutation, { loading: mutationLoading, error: mutationError }] = useMutation(login)

  return { loginMutation, mutationLoading, mutationError }
}
