import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/Home.page"
import ShoppingCartPage from "./pages/ShoppingCart.page"
import CheckoutPage from "./pages/Checkout.page"
import NotFoundPage from "./pages/NotFound.page"

function App() {
	fetch("http://localhost:3000/products")
		.then((res) => {
			return res.json()
		})
		.then(console.log)

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to='/home' />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/shoppingcart" element={<ShoppingCartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
