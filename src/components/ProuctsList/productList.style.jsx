import { styled } from 'styled-components'

export const ProductListWrapper = styled.div`
	margin-top: 1.5rem;
	border-top: 1px solid #d3d3d3;

	& + & {
		margin-top: 2.5rem;
		border-top: none;
	}
`

export const WrapperTitle = styled.h5`
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #8d8282;
	font-size: 1.1rem;
	margin-bottom: 1rem;
`