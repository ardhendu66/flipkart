import axios from "axios"

const productsBaseUrl = 'http://localhost:4000/products'

export const fetchProducts = () => {
    return new Promise(async (resolve) => {
        const response = await axios.get(productsBaseUrl)
        resolve(response.data)
    })
}

export const fetchProductsByFilter = (filters) => {
    let queryString = ''
    for(let key in filters) {
        queryString += `${key}=${filters[key]}&`
    }

    queryString = queryString.replaceAll(" ", "+").substring(0, queryString.length - 1)

    return new Promise(async (resolve) => {
        const response = await axios.get(`${productsBaseUrl}?${queryString}`)
        console.log(`${productsBaseUrl}?${queryString}`)
        console.log("API: ", response.data)
        return response.data
    })
}