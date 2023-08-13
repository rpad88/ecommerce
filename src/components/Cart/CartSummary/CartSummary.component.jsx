import { Button } from 'react-bootstrap'
import * as Styled from './cartSummary.style'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'

export default function CartSummaryComponent() {
	const { cartTotal } = useContext(ShoppingCartContext)

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

			<Button variant="primary" className="mt-auto">
				Continuar comprando
			</Button>
			<Button>Finalizar a compra</Button>
		</Styled.SummaryCard>
	)
}
