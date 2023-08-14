import { Button, Card, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'
import ProductActionsComponent from '../ProductActions/ProductActions.component'

export default function ProductCardComponent({ item }) {
	const { increaseCartQuantity, removeFromCart, getItemQuantity } =
		useContext(ShoppingCartContext)

	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<Col>
			<Card className="h-100">
				<Card.Img variant="top" src="https://placehold.co/250x200" />
				<Card.Body className="d-flex flex-column justify-content-center">
					<Card.Title>{MoneyFormatter.format(item.price)}</Card.Title>
					<Card.Text
						style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
					>
						{item.description}{' '}
					</Card.Text>

					{getItemQuantity(item.id) !== 0 && (
						<ProductActionsComponent product={item} />
					)}

					{getItemQuantity(item.id) === 0 ? (
						<Button
							variant="outline-secondary"
							className="mx-auto mt-1"
							onClick={() => increaseCartQuantity(item)}
						>
							Adicionar ao carrinho
						</Button>
					) : (
						<Button
							variant="outline-danger"
							className="mx-auto mt-1"
							onClick={() => removeFromCart(item)}
						>
							Remover do carrinho
						</Button>
					)}
				</Card.Body>
			</Card>
		</Col>
	)
}
