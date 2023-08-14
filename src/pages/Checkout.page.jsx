import { Col, Container, Row } from 'react-bootstrap'
import CheckoutFormComponent from '../components/Checkout/CheckoutForm/CheckoutForm.component'
import CheckoutSummaryComponent from '../components/Checkout/CheckoutSummary/CheckoutSummary.component'


export default function CheckoutPage() {
	return (
		<Container>
			<Row className='d-flex flex-wrap-reverse pt-5'>
				<Col>
					<CheckoutFormComponent />
				</Col>
				<Col xs={12} md={4} className='mt-2 mb-3'>
          <CheckoutSummaryComponent />
				</Col>
			</Row>
		</Container>
	)
}
