import { Button, Card } from 'react-bootstrap'
import * as Styled from './productCard.style'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'
import ProductActionsComponent from '../ProductActions/ProductActions.component'

export default function ProductCardComponent({ item }) {
	const {
		increaseCartQuantity,
		removeFromCart,
		getItemQuantity,
	} = useContext(ShoppingCartContext)

	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<>
			<Styled.Card style={{ margin: '5px' }}>
				<Card.Img variant="top" src="https://placehold.co/250x200" />
				<Card.Body
					className="d-flex flex-column justify-content-center"
					style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
				>
					<Card.Title>{MoneyFormatter.format(item.price)}</Card.Title>
					<Card.Text>{item.description} </Card.Text>

					{getItemQuantity(item.id) !== 0 && 
						<ProductActionsComponent product={item} />
					}

					{getItemQuantity(item.id) === 0 ? (
						<Button
							variant="outline-secondary"
							className="mx-auto mt-3"
							onClick={() => increaseCartQuantity(item)}
						>
							Adicionar ao carrinho
						</Button>
					) : (
						<Button
							variant="outline-danger"
							className="mx-auto mt-3"
							onClick={() => removeFromCart(item)}
						>
							Remover do carrinho
						</Button>
					)}
				</Card.Body>
			</Styled.Card>
		</>
	)
}
