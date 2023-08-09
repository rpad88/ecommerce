import { Container, Nav, Navbar } from "react-bootstrap"
import { IoCartOutline } from "react-icons/io5"
import SearchComponent from "../Search/Search.component"
import { useEffect, useState } from "react"

export default function HeaderComponent() {
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

				<Nav className="ml-auto">
					<Nav.Link href="/shoppingcart">
						<IoCartOutline size={20} />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
