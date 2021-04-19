import { register } from '../hoc/registerMutacion'
import { useMutation } from '@apollo/client'

export const useRegisterMutation = () => {
  const [registerMutation, { loading: mutationLoading, error: mutationError }] = useMutation(register)

  return { registerMutation, mutationLoading, mutationError }
}
