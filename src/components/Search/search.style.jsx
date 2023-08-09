import { styled } from "styled-components";

export const SearchWrapper = styled.div`
    /* width: 100%; */
    position: relative;
`

export const SearchInput = styled.input`
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    width: 25rem;
    padding: .2rem .5rem;
    margin: 0 auto;

    &:focus {
        border: none;
    }
`