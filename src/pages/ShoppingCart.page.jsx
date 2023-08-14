import { useContext, useEffect } from 'react'
import CartListComponent from '../components/Cart/CartList/CartList.component'
import { ShoppingCartContext } from '../contexts/ShoppingCart.context'
import { Col, Container } from 'react-bootstrap'
import CartSummaryComponent from '../components/Cart/CartSummary/CartSummary.component'

export default function ShoppingCartPage() {
	const { cartItems } = useContext(ShoppingCartContext)

	useEffect(() => {
		console.log(cartItems)
	})

	return (
		<Container
			className="d-flex mt-3 flex-wrap gap-3"
			style={{ justifyContent: 'space-between' }}
		>
			<Col className="d-flex flex-column gap-3">
				{cartItems.map((product) => (
					<CartListComponent key={product.id} product={product} />
				))}
			</Col>
			<Col xs={12} md={3}>
				<CartSummaryComponent />
			</Col>
		</Container>
	)
}
