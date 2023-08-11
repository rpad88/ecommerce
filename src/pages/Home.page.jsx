import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/Header/Header.component'
import ProductListComponent from '../components/ProuctsList/ProductList.component'

export default function HomePage() {
	return (
		<>
			<HeaderComponent />
			<Container>
				<ProductListComponent sectionName="ofertas do dia" />
				<ProductListComponent sectionName="melhores produtos" />
			</Container>
		</>
	)
}
