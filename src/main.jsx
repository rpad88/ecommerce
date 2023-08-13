import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShoppingCartProvider } from './contexts/ShoppingCart.context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './contexts/Search.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<SearchProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SearchProvider>
		</ShoppingCartProvider>
	</React.StrictMode>
)
