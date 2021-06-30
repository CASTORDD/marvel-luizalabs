import axios from 'axios'

export const baseUrl = process.env.REACT_APP_API_BASE_URL
export const apiKey = process.env.REACT_APP_PUBLIC_KEY

export const getHeros = (filterValue: I.FilterCharactersProps) => {
  const { limit, offset, name, order } = filterValue

  return axios.get(
    `${baseUrl}/characters?orderBy=${order}&limit=${limit}${
      name ? '&name=' + name : ''
    }&offset=${offset}&apikey=${apiKey}`
  )
}

export const getHero = (id: number) => {
  return axios.get(`${baseUrl}/characters/${id}?apikey=${apiKey}`)
}

export const setFavotieHeros = (list: any) => {
  const herosList: any = []
  list.map((item: number) => {
    return axios
      .get(`${baseUrl}/characters/${item}?apikey=${apiKey}`)
      .then(({ data }) => {
        herosList.push(data.data.results[0])
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  })

  return herosList
}
