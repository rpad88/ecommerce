import { styled } from "styled-components";


export const SummaryCard = styled.div`
    padding: .5rem;
    border: 1px solid #ddd;
    border-radius: .5rem;
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    max-height: 250px;
    gap: 1rem;
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