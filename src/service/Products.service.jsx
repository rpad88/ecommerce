const PRODUCTS_URL = 'http://localhost:3000/products'

const getAllProducts = async () => {
    try {
        const dados = await fetch(PRODUCTS_URL).then(res => res.json())
        return dados
    } catch (error) {
        console.error(error.message)
    }
}

export const ProductsService = {
    getAllProducts
}