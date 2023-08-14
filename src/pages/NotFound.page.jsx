import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
	const navigate = useNavigate()

	return (
		<Container className='d-flex align-items-center' style={{maxWidth: '850px'}}>
			<Col sm={12} lg={12}>
				<Card className="mt-3 p-3 d-flex align-items-center">
					<Row>
						<Card.Img src="https://http.dog/404.jpg"/>
					</Row>
					<Row>
						<Button
							variant="outline-secondary"
							size="md"
							className="mt-5"
							onClick={() => navigate('/home')}
						>
							Ir para a home
						</Button>
					</Row>
				</Card>
			</Col>
		</Container>
	)
}