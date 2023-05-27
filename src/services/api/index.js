import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hackarestaurante-loading.azurewebsites.net/api/',
})

export const getCategories = async () => {
  try {
    const response = await api.get('cliente/categorias')

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getCategoriesById = async (id) => {
  try {
    const response = await api.get(`cliente/categorias/${id}`)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getProducts = async () => {
  try {
    const response = await api.get('cliente/produtos')

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getProductsById = async (id) => {
  try {
    const response = await api.get(`cliente/produtos/${id}`)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getOrdersByUser = async () => {
  try {
    const response = await api.get('cliente/pedidos/usuario/1')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
