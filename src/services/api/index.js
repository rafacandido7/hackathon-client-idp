import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hackarestaurante-loading.azurewebsites.net/api/',
})

// api.get('cliente/categorias').then(response => {
//   console.log(response.data)
// }).catch(error => {
//   console.log(error)
// })

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

console.log(await getCategoriesById(5))
