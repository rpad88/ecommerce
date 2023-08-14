import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'

export default function CheckoutSummaryComponent() {
	const { cartQuantity, cartTotal } = useContext(ShoppingCartContext)

	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<Card className='p-3'>
			<Card.Text className='text-center'>{cartQuantity} itens</Card.Text>
			<Card.Title className='d-flex text-wrap'>
				<span>Total</span> <span className='ms-auto'>{MoneyFormatter.format(cartTotal)}</span>
			</Card.Title>
		</Card>
	)
}
