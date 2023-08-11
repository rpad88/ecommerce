import { styled } from 'styled-components'

export const ProductListWrapper = styled.div`
	margin-top: 1rem;
	border-top: 1px solid #d3d3d3;
`

export const WrapperTitle = styled.h5`
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #8d8282;
	font-size: 1.1rem;
	margin-bottom: 1rem;
`

export const CardGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 1rem;
`
