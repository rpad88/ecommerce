import { Container } from 'react-bootstrap'
import ProductListComponent from '../components/ProuctsList/ProductList.component'
import { useContext, useEffect, useState } from 'react'
// import { ProductsService } from '../service/Products.service'
import { SearchContext } from '../contexts/Search.context'

export default function HomePage() {
	const [products, setProducts] = useState([])
	const [bestProducts, setBestProducts] = useState([])
	const { filter } = useContext(SearchContext)
	const [filtered, setFiltered] = useState(products)

	const getProducts = async () => {
		const response =  await fetch('https://dummyjson.com/products')
		.then(res => res.json())
		// console.log(response.products)
		setProducts(response.products)
	}

	const filterBest = () => {
		const bestList = products.filter((product) => {
			return product.rating > 4.7
		})
		setBestProducts(bestList)
	}

	useEffect(() => {
		getProducts()
	}, [])

	//como não é função assíncrona, podemos chamar de forma reduzida
	useEffect(filterBest, [products])

	function findItem() {
		const result = products.filter((product) => {
			return product.title.toLowerCase().includes(filter)
		})
		setFiltered(result)
	}

	useEffect(findItem, [filter])

	return (
		<>
			<Container>
				{filter ? (
					<ProductListComponent
						sectionName="encontrados"
						products={filtered}
					/>
				) : (
					<ProductListComponent
						sectionName="ofertas do dia"
						products={products}
					/>
				)}

				{bestProducts != 0 && (
					<ProductListComponent
						sectionName="melhores produtos"
						products={bestProducts}
					/>
				)}
			</Container>
		</>
	)
}
