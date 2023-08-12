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

	function increaseCartQuantity(id) {
		setCartItems((currentItems) => {
			// if the product doesn`t exists on shopping cart, add them
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, qtyOnCart: 1 }]
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, qtyOnCart: item.qtyOnCart + 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	function decreaseCartQuantity(id) {
		setCartItems((currentItems) => {
			// if has only 1 on cart, remove the product
			if (currentItems.find((item) => item.id === id).qtyOnCart === 1) {
				return currentItems.filter((item) => item.id != id)
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
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
