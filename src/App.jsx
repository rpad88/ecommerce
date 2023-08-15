import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/Home.page"
import ShoppingCartPage from "./pages/ShoppingCart.page"
import CheckoutPage from "./pages/Checkout.page"
import NotFoundPage from "./pages/NotFound.page"
import NavbarComponent from "./components/Navbar/Navbar.component"
import { useEffect } from "react"

function App() {

	return (
		<>
				<NavbarComponent />
				<Routes>
					<Route path="/" element={<Navigate to='/home' />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/shoppingcart" element={<ShoppingCartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
		</>
	)
}

export default App
