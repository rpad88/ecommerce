import { createContext, useState } from "react";


export const ShoppingCartContext = createContext({
    quantity: 0,
    setQuantity: () => {}
})

export const ShoppingCartProvider = ({children}) => {
    const [quantity, setQuantity] = useState(0)

    return ( 
        <ShoppingCartContext.Provider value={{quantity, setQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}