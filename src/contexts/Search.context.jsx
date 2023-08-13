import { createContext, useState } from 'react'

export const SearchContext = createContext({
	filter: '',
	setFilter: () => {},
})

export const SearchProvider = ({ children }) => {
	const [filter, setFilter] = useState()

	return (
		<SearchContext.Provider value={{ filter, setFilter }}>
			{children}
		</SearchContext.Provider>
	)
}
