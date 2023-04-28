import Menu from "../components/Menu"
import Topo from "../components/Topo";
import styled from "styled-components";

export default function HomePage() {
    return (
        <>
            <Topo />
            <Menu />
            <JogosContainer>
                <DivJogo>
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427" />
                    <h1>Counter-Strike: Global Offensive</h1>
                    <p>O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 19 anos.</p>
                    <DivPrice>
                        <p>Grátis</p>
                        <button>Comprar</button>
                    </DivPrice>
                </DivJogo>
            </JogosContainer>
        </>
    )
};

const JogosContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    width: 100vw;
    background-color: #FFFAFA;
    display: flex;
    justify-content: center;
`

const DivJogo = styled.div`
    border-radius: 5px;
    margin-top: 20px;
    width: 280px;
    height: 300px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));   
    img{
        width: 280px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    p{
        margin-top: 15px;
        font-size: 10px;
        margin-left: 5px;
    }
    h1{
        margin-top: 10px;
        font-size: 17px;
    }
`

const DivPrice = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 100px;
    p{
        font-size: 20px;
        margin-left: 10px;
        margin-top: 15px;
    }
    button{
        background-color: #00FF00;
        width: 100px;
        margin-right: 10px;
        font-size: 15px;
    }
`