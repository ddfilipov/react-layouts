import "./App.css";
import styled from "styled-components";
import { Layout1 } from "./components/Layout1";

const Layout = styled.div`
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-template-rows: 5% auto;
    gap: 15px;
    padding: 10px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    div {
        border: 1px solid black;
    }
    /* position: relative; */
`;

const NavMenu = styled.div`
    background: #bd5656;
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
    grid-row: 1/2;
    align-items: center;
    justify-content: center;
`;

const QuoteArea = styled.div`
    background: #56bd8d;
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 2/3;
    align-items: center;
    justify-content: center;
`;

const MainArea = styled.div`
    background: #568fbd;
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 2/3;
    align-items: center;
    justify-content: center;
    justify-content: start;
    overflow-y: auto;
    padding: 10px;
`;

const VeryTallDiv = styled.div`
    background: #103757;
    height: 1200px;
    width: 250px;
`;

function App() {
    return (
        <Layout>
            <NavMenu>NAVBAR</NavMenu>
            <QuoteArea>QUOTE AREA</QuoteArea>
            <MainArea>
                <h2>MAIN AREA</h2>
                <VeryTallDiv>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </VeryTallDiv>
            </MainArea>
        </Layout>
        // <Layout1 />
    );
}

export default App;
