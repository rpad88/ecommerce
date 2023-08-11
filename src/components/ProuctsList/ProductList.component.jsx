import ProductCardComponent from './ProductCard/ProductCard.component'
import * as Styled from './productList.style'
import { useEffect, useState } from 'react'
import { ProductsService } from '../../service/Products.service'

export default function ProductListComponent({ sectionName }) {
	const [promotion, setPromotion] = useState([])

	useEffect(() => {
		async function getProducts() {
			const data = await ProductsService.getAllProducts()
            if(!data) return alert('something get wrong')
            setPromotion(data)
		}
		getProducts()
	},[])

	return (
		<Styled.ProductListWrapper>
			<Styled.WrapperTitle>{sectionName}</Styled.WrapperTitle>
			<Styled.CardGroup>
				{
                    promotion?.map((item) => <ProductCardComponent key={item.id} item={item} />)
                }
			</Styled.CardGroup>
		</Styled.ProductListWrapper>
	)
}
