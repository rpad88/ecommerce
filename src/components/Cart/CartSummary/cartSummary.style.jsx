import { styled } from "styled-components";


export const SummaryCard = styled.div`
    padding: .5rem;
    border: 1px solid #ddd;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fefefe;
    box-shadow: 0 0 5px #ddd;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    color: #808080;
`

export const TotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`