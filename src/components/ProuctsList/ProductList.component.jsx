import { CardGroup } from 'react-bootstrap'
import ProductCardComponent from './ProductCard/ProductCard.component'
import * as Styled from './productList.style'

export default function ProductListComponent({ sectionName }) {
	return (
		<Styled.ProductListWrapper>
			<Styled.WrapperTitle>{sectionName}</Styled.WrapperTitle>
			<Styled.CardGroup >
				<ProductCardComponent />
				<ProductCardComponent />
				<ProductCardComponent />
				<ProductCardComponent />
				<ProductCardComponent />
				<ProductCardComponent />
				<ProductCardComponent />
				
			</Styled.CardGroup>
		</Styled.ProductListWrapper>
	)
}
