import { Container } from 'react-bootstrap'
import ProductListComponent from '../components/ProuctsList/ProductList.component'
import { useContext, useEffect, useState } from 'react'
import { ProductsService } from '../service/Products.service'
import { SearchContext } from '../contexts/Search.context'

export default function HomePage() {
	const [products, setProducts] = useState([])
	const [bestProducts, setBestProducts] = useState([])
	const { filter } = useContext(SearchContext)
	const [filtered, setFiltered] = useState()

	const getProducts = async () => {
		const data = await ProductsService.getAllProducts()
		if (!data) return alert('something get wrong')
		setProducts(data)
	}

	const filterBest = () => {
		const bestList = products.filter((product) => {
			return product.average_rating > 4.5
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
			return product.name.toLowerCase().includes(filter)
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
