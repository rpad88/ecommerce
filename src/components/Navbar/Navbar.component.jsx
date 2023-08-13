import './navbar.style.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import SearchComponent from '../Search/Search.component'
import { useContext} from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart.context'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
	const { cartQuantity } = useContext(ShoppingCartContext)
	const navigate = useNavigate()
	const location = useLocation()


	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand className='btn border-0' onClick={() => navigate('/home')}>
					365 commerce
				</Navbar.Brand>

				{location.pathname === '/home' && <SearchComponent />}

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
