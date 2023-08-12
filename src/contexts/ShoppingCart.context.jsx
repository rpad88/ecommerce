import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext({
	cartItems: [],
	setCartItems: () => {},
})

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])

	function getItemQuantity(id) {
		return cartItems.find((item) => item.id === id)?.qtyOnCart || 0
	}

	function increaseCartQuantity(product) {
		setCartItems((currentItems) => {
			// if the product doesn`t exists on shopping cart, add them
			if (currentItems.find((item) => item.id === product.id) == null) {
				return [...currentItems, { ...product, qtyOnCart: 1 }]
			} else {
				return currentItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, qtyOnCart: item.qtyOnCart + 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	function decreaseCartQuantity(product) {
		setCartItems((currentItems) => {
			// if has only 1 on cart, remove the product
			if (currentItems.find((item) => item.id === product.id).qtyOnCart === 1) {
				return currentItems.filter((item) => item.id != product.id)
			} else {
				return currentItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, qtyOnCart: item.qtyOnCart - 1 }
					} else {
						return item
					}
				})
			}
		})
	}

    function removeFromCart(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.qtyOnCart + quantity,
		0
	)

	return (
		<ShoppingCartContext.Provider
			value={{
				cartItems,
				setCartItems,
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
                removeFromCart,
                cartQuantity
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
