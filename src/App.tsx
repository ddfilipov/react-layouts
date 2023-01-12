import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
    background: #bd5656;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 100vh;
    max-width: 100vw;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 55px auto;
    div {
        border: 1px solid black;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
    grid-row: 1/2;
    align-items: center;
    justify-content: center;
`;

const QuoteArea = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 2/3;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <Wrapper>
            <Layout>
                <NavMenu>NAVBAR</NavMenu>
                <QuoteArea>QUOTE AREA</QuoteArea>
            </Layout>
        </Wrapper>
    );
}

export default App;
