import { Container, Nav, Navbar } from "react-bootstrap"
import { IoCartOutline } from "react-icons/io5"
import SearchComponent from "../Search/Search.component"

export default function HeaderComponent() {
	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="/" >
					365 commerce
				</Navbar.Brand>
				<SearchComponent />
				<Nav className="ml-auto">
					<Nav.Link href="/shoppingcart">
						<IoCartOutline size={20} />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
