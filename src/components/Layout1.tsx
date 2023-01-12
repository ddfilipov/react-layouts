import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    border-style: solid;
    border-color: red;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr); */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 100vw;
    height: 100vh;
`;

const One = styled.div`
    border-style: solid;
    border-color: blue;
    grid-column: 1 / 3;
    grid-row: 1;
`;
const Two = styled.div`
    border-style: solid;
    border-color: yellow;
    grid-column: 2 / 4;
    grid-row: 1 / 3;
`;
const Three = styled.div`
    border-style: solid;
    border-color: violet;
    grid-row: 2 / 5;
    grid-column: 1;
`;
const Four = styled.div`
    border-style: solid;
    border-color: aqua;
    grid-column: 3;
    grid-row: 3;
`;
const Five = styled.div`
    border-style: solid;
    border-color: green;
    grid-column: 2;
    grid-row: 4;
`;
const Six = styled.div`
    border-style: solid;
    border-color: purple;
    grid-column: 3;
    grid-row: 4;
`;
export const Layout1: FC = () => {
    return (
        <Wrapper>
            <One>One</One>
            <Two>Two</Two>
            <Three>Three</Three>
            <Four>Four</Four>
            <Five>Five</Five>
            <Six>Six</Six>
        </Wrapper>
    );
};
