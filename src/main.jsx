import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShoppingCartProvider } from './contexts/ShoppingCart.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<App />
		</ShoppingCartProvider>
	</React.StrictMode>
)
