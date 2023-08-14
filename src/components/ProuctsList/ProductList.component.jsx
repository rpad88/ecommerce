import ProductCardComponent from './ProductCard/ProductCard.component'
import * as Styled from './productList.style'
import { Row } from 'react-bootstrap'

export default function ProductListComponent({ sectionName, products }) {
	

	return (
		<Styled.ProductListWrapper>
			<Styled.WrapperTitle>{sectionName}</Styled.WrapperTitle>
			<Row xs={1} sm={2} md={3} lg={4} xxl={5} className='g-4'>
				{
                    products?.map((item) => <ProductCardComponent key={item.id} item={item} />)
                }
			</Row>
		</Styled.ProductListWrapper>
	)
}
