import { useContext, useEffect } from 'react'
import CartListComponent from '../components/Cart/CartList/CartList.component'
import { ShoppingCartContext } from '../contexts/ShoppingCart.context'
import { Container } from 'react-bootstrap'
import CartSummaryComponent from '../components/Cart/CartSummary/CartSummary.component'

export default function ShoppingCartPage() {
	const { cartItems } = useContext(ShoppingCartContext)

	useEffect(() => {
		console.log(cartItems)
	})

	return (
		<Container className="d-flex mt-3 flex-wrap" style={{justifyContent: 'space-between'}}>
			<div className='d-flex flex-column gap-3' style={{flexBasis: '74%'}}>
				{cartItems.map((product) => (
					<CartListComponent key={product.id} product={product} />
				))}
			</div>
      <CartSummaryComponent />
		</Container>
	)
}
