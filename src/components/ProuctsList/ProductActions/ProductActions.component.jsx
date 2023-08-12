import { useContext } from 'react'
import * as Styled from './productActions.style'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'

export default function ProductActionsComponent({product}) {

    const {
		increaseCartQuantity,
		decreaseCartQuantity,
		getItemQuantity,
	} = useContext(ShoppingCartContext)


	return (
		<Styled.ActionsWrapper>
			<Styled.ActionBtn
				onClick={() => decreaseCartQuantity(product)}
				className="btn btn-primary"
			>
				-
			</Styled.ActionBtn>
			<Styled.ProdQuantity>{getItemQuantity(product.id)}</Styled.ProdQuantity>
			<Styled.ActionBtn
				onClick={() => increaseCartQuantity(product)}
				className="btn btn-primary"
			>
				+
			</Styled.ActionBtn>
		</Styled.ActionsWrapper>
	)
}
