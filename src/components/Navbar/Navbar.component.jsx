import './header.style.css'
import { Container, Nav, Navbar } from "react-bootstrap"
import { IoCartOutline } from "react-icons/io5"
import SearchComponent from "../Search/Search.component"
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCart.context"

export default function NavbarComponent() {

	const {quantity} = useContext(ShoppingCartContext)
	const [showSearch, setShowSearch] = useState(true)

	useEffect(() => {
		const paginaAtual = window.location.href
		if (!paginaAtual.includes("/home")) setShowSearch(false)
	})

	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="/">365 commerce</Navbar.Brand>

				{showSearch && <SearchComponent />}

				<Nav className="ml-auto badge">
					<span className="count">{quantity}</span>
					<Nav.Link href="/shoppingcart">
						<IoCartOutline size={26} />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
