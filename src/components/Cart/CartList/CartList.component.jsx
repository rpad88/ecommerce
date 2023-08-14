import { Card, Col, Row } from 'react-bootstrap'
import ProductActionsComponent from '../../ProuctsList/ProductActions/ProductActions.component'

export default function CartListComponent({ product }) {
	const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<Card className="d-flex">
			<Row className="g-0">
				<img
					className="img-fluid rounded-start me-2"
					src="https://placehold.co/130x105"
					style={{ maxWidth: '130px' }}
				/>

				<Col className="d-flex flex-wrap align-items-center">
					<div>
						<div>
							{product.name}{' '}
							{product.qtyOnCart > 1 && (
								<span
									className="text-muted"
									style={{ fontSize: '.75rem' }}
								>
									x{product.qtyOnCart}
								</span>
							)}
						</div>
						<div className="text-muted" style={{ fontSize: '.85rem' }}>
							{MoneyFormatter.format(product.price)}
						</div>
					</div>
					<div className="ms-auto d-flex align-items-center gap-2">
						<ProductActionsComponent product={product} />
						<div className="fw-bold" style={{ width: '100px' }}>
							{MoneyFormatter.format(product.price * product.qtyOnCart)}
						</div>
					</div>
				</Col>
			</Row>
		</Card>
	)
}
