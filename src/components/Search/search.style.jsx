import { styled } from "styled-components"
import { FaMagnifyingGlass } from 'react-icons/fa6'

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

export const IconWrapper = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    padding: .5rem;
    top: 0px;
    right: 0px;
    border-radius: 0 5px 5px 0;
    border-left: 1px solid #ddd;

    /* &:hover {
        cursor: pointer;
    } */
`