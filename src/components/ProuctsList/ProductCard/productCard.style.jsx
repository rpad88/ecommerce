import { styled } from "styled-components";


export const Card = styled.div`
    margin: .5rem;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    padding-bottom: .5rem;

    &:hover {
    box-shadow: 0 0 5px #d3d3d3;

    }

    div {
        padding: 5px;

        p {
        height: 80px;
        padding: 5px;
        }
    }

`