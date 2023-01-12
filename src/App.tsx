import "./App.css";
import styled from "styled-components";
import { Layout1 } from "./components/Layout1";

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
    /* background: #bd5656; */
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 5% auto;
    padding: 10px;
    /* grid-template-rows: 55px auto; */
    grid-gap: 10px;
    width: 100vw;
    height: 100vh;
    /* min-width: 100%; */
    min-height: 100%;
    div {
        border: 1px solid black;
    }
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
`;

function App() {
    return (
        // <Wrapper>
        // <Layout>
        //     <NavMenu>NAVBAR</NavMenu>
        //     <QuoteArea>QUOTE AREA</QuoteArea>
        //     <MainArea>MAIN AREA</MainArea>
        // </Layout>
        <Layout1 />
        // </Wrapper>
    );
}

export default App;
