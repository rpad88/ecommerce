import ProductCardComponent from "./ProductCard/ProductCard.component";
import * as Styled from './productList.style'

export default function ProductListComponent({sectionName}) {
  return (
    <Styled.ProductListWrapper>
        <Styled.WrapperTitle>{sectionName}</Styled.WrapperTitle>
        <ProductCardComponent />
    </Styled.ProductListWrapper>
  )
}
