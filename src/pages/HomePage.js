import { useEffect, useState } from "react";
import Menu from "../components/Menu"
import Topo from "../components/Topo";
import styled from "styled-components";
import axios from "axios";

export default function HomePage() {
    const [games, setGames] = useState([]);
    const [selectGames, setSelectGames] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/games";
        const promise = axios.get(url)
        promise.then((res) => {
            setGames(res.data);
        })
        promise.catch((err) => {
            return alert(err.response.data);
        })
    }, [])

    function buyGames(){
        
    }

    return (
        <>
            <Topo />
            <Menu />
            <JogosContainer>
                {games.map((g) =>
                    <DivJogo>
                        <img src={g.img} />
                        <h1>{g.title}</h1>
                        <p>{g.description}</p>
                        <DivPrice>
                            {(g.price === 0) ? <p>Grátis</p>
                            : <p>R$ {g.price}</p>}
                            <button onClick={buyGames}>Comprar</button>
                        </DivPrice>
                    </DivJogo>
                )}

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
    flex-wrap: wrap;
    gap: 20px;
`

const DivJogo = styled.div`
    border-radius: 5px;
    margin-top: 20px;
    width: 280px;
    height: 390px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    position: relative;   
    img{
        width: 280px;
        height: 200px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    p{
        margin-top: 10px;
        font-size: 11px;
        margin-left: 5px;
        margin-right: 5px;
        text-align: justify;
    }
    h1{
        margin-top: 15px;
        font-size: 17px;
        text-align: center;
    }
`

const DivPrice = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 70px;
    position: absolute;
    bottom: 10px;
    justify-content: space-between;
    p{
        font-size: 20px;
        margin-left: 10px;
        margin-top: 10px;
    }
    button{
        background-color: #00FF00;
        width: 100px;
        margin-right: 10px;
        font-size: 15px;
    }
`