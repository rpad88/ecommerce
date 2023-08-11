import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/Header/Header.component'
import ProductListComponent from '../components/ProuctsList/ProductList.component'
import { useEffect, useState } from 'react'
import { ProductsService } from '../service/Products.service'

export default function HomePage() {

  const [products, setProducts] = useState([])
  const [bestProducts, setBestProducts] = useState([])

	useEffect(() => {
		async function getProducts() {
			const data = await ProductsService.getAllProducts()
            if(!data) return alert('something get wrong')
            setProducts(data)
		}
		getProducts()

    const bestList = products.filter(product => product.average_rating > 4.5)
    setBestProducts(bestList)
	},[])



	return (
		<>
			<HeaderComponent />
			<Container>
				<ProductListComponent sectionName="ofertas do dia" products={products} />
				<ProductListComponent sectionName="melhores produtos" products={bestProducts}/>
			</Container>
		</>
	)
}
