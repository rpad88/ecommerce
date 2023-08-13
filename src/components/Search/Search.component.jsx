import { useContext } from 'react'
import * as Styled from './search.style'
import { SearchContext } from '../../contexts/Search.context'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function SearchComponent() {
	const { filter, setFilter } = useContext(SearchContext)

	const handleInput = (input) => {
		const value = input.trim().toLowerCase()
		setFilter(value)
	}

	return (
		<Styled.SearchWrapper>
			<Styled.SearchInput
				type="text"
				placeholder="Pesquise um produto"
				className="focus-ring focus-ring-secondary"
				onInput={(e) => handleInput(e.target.value)}
        onBlur={() => setFilter('')}
        value={filter}
			/>
			<Styled.IconWrapper>
				<FaMagnifyingGlass color="#808080" />
			</Styled.IconWrapper>
		</Styled.SearchWrapper>
	)
}
