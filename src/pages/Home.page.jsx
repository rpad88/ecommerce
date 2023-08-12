import { Container } from 'react-bootstrap'
import ProductListComponent from '../components/ProuctsList/ProductList.component'
import { useEffect, useState } from 'react'
import { ProductsService } from '../service/Products.service'

export default function HomePage() {
	const [products, setProducts] = useState([])
	const [bestProducts, setBestProducts] = useState([])

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

	return (
		<>
			<Container>
				<ProductListComponent
					sectionName="ofertas do dia"
					products={products}
				/>
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
