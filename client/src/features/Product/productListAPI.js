import axios from "axios"

const productsBaseUrl = 'http://localhost:3000/products'

export const fetchProducts = async () => {
    try {
        const response = await axios.get(productsBaseUrl)
        return(response.data)
    }
    catch(err) {
        return err.message
    }
}

export const fetchProductsByFilter = async (filters) => {
    let queryString = ''
    for(let key in filters) {
        queryString += `${key}=${filters[key]}&`
    }

    queryString = queryString.replaceAll(" ", "+").substring(0, queryString.length - 1)
    console.log(queryString)

    try {
        const response = await axios.get(`${productsBaseUrl}?${queryString}`)
        console.log(`${productsBaseUrl}?${queryString}`)
        console.log("API: ", response.data)
        return response.data
    }
    catch(err) {
        return err.message
    }
}