import { Stack } from 'react-bootstrap'
import ProductActionsComponent from '../../ProuctsList/ProductActions/ProductActions.component'

export default function CartListComponent({ product }) {
	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<Stack
			direction="horizontal"
			gap={3}
			className="card d-flex align-items-center"
		>
			<img src="https://placehold.co/100x100" />
			<div>
				<div>
					{product.name}{' '}
					{product.qtyOnCart > 1 && (
						<span className="text-muted" style={{ fontSize: '.75rem' }}>
							x{product.qtyOnCart}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: '.85rem' }}>
					{MoneyFormatter.format(product.price)}
				</div>
			</div>
			<div className="ms-auto">
				<ProductActionsComponent product={product} />
			</div>
			<div className="fw-bold" style={{ width: '110px' }}>
				{MoneyFormatter.format(product.price * product.qtyOnCart)}
			</div>
		</Stack>
	)
}
