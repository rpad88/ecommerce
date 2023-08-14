import { Button } from 'react-bootstrap'
import * as Styled from './cartSummary.style'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'
import { useNavigate } from 'react-router-dom'

export default function CartSummaryComponent() {
	const { cartTotal } = useContext(ShoppingCartContext)
	const navigate = useNavigate()

	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<Styled.SummaryCard>
			<Styled.Title>Resumo da Compra</Styled.Title>
			<Styled.TotalWrapper>
				<span>Total</span>
				<span>{MoneyFormatter.format(cartTotal)}</span>
			</Styled.TotalWrapper>

			<Button
				variant="outline-primary"
				className="mt-auto"
				onClick={() => navigate('/home')}
			>
				Continuar comprando
			</Button>
			<Button onClick={() => navigate('/checkout')}>
				Finalizar a compra
			</Button>
		</Styled.SummaryCard>
	)
}
