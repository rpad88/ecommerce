import * as Styled from './search.style'

export default function SearchComponent() {
  return (
    <Styled.SearchWrapper>
      <Styled.SearchInput placeholder='Products' className='focus-ring focus-ring-secondary'/>
    </Styled.SearchWrapper>
  )
}
