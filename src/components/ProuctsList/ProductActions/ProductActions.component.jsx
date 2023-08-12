import { useContext } from 'react'
import * as Styled from './productActions.style'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'

export default function ProductActionsComponent({id}) {

    const {
		increaseCartQuantity,
		decreaseCartQuantity,
		getItemQuantity,
	} = useContext(ShoppingCartContext)


	return (
		<Styled.ActionsWrapper>
			<Styled.ActionBtn
				onClick={() => decreaseCartQuantity(id)}
				className="btn btn-primary"
			>
				-
			</Styled.ActionBtn>
			<Styled.ProdQuantity>{getItemQuantity(id)}</Styled.ProdQuantity>
			<Styled.ActionBtn
				onClick={() => increaseCartQuantity(id)}
				className="btn btn-primary"
			>
				+
			</Styled.ActionBtn>
		</Styled.ActionsWrapper>
	)
}
