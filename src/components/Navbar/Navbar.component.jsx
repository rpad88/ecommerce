import './navbar.style.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import SearchComponent from '../Search/Search.component'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart.context'
import { useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
	const { cartQuantity } = useContext(ShoppingCartContext)
	const [showSearch, setShowSearch] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const paginaAtual = window.location.href
		if (!paginaAtual.includes('/home')) setShowSearch(false)
	})

	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="#" onClick={() => navigate('/')}>
					365 commerce
				</Navbar.Brand>

				{showSearch && <SearchComponent />}

				<Nav.Link
					className="badge p-2"
					style={{ padding: '0' }}
					onClick={() => navigate('/shoppingcart')}
				>
					<span className="count">{cartQuantity}</span>
					<IoCartOutline size={26} color="#000" />
				</Nav.Link>
			</Container>
		</Navbar>
	)
}
