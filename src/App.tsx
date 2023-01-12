import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
    background: #bd5656;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 55px auto;
    div {
        height: vw;
        border: 1px solid black;
    }
`;

const NavMenu = styled.div``

function App() {
    return (
        <Wrapper>
            <Layout>
                <div>aaaaaaaaaaaaa</div>
                <div></div>
            </Layout>
        </Wrapper>
    );
}

export default App;
