import ProductCardComponent from './ProductCard/ProductCard.component'
import * as Styled from './productList.style'
import { useEffect, useState } from 'react'
import { ProductsService } from '../../service/Products.service'

export default function ProductListComponent({ sectionName, products }) {
	

	return (
		<Styled.ProductListWrapper>
			<Styled.WrapperTitle>{sectionName}</Styled.WrapperTitle>
			<Styled.CardGroup>
				{
                    products?.map((item) => <ProductCardComponent key={item.id} item={item} />)
                }
			</Styled.CardGroup>
		</Styled.ProductListWrapper>
	)
}
