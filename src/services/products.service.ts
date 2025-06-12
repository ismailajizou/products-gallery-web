import { api } from '../lib/api'

export const getAll = async () => {
  const response = await api.get('/products')
  return response.data
}
