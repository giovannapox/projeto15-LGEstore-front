import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu () { 
    return (
        <>
        <ContainerMenu>
                <MenuLeft>
                    <Link to="/">Home</Link>
                    <Link to="/">Ação e Aventura</Link>
                    <Link to="/">Esporte</Link>
                    <Link to="/">Luta</Link>
                    <Link to="/">RPG</Link>
                    <Link to="/">FPS</Link>
                    <Link to="/">Corrida</Link>
                    <Link to="/">Simulação</Link>
                    <Link to="/">Terror</Link>
                </MenuLeft>
                <MenuRight>
                    <Link to="/login">Entrar</Link>
                    <Link to="/cadastro">Cadastrar</Link>
                    <Link to="/"><ion-icon name="cart"></ion-icon></Link>
                </MenuRight>
        </ContainerMenu>
        </>
    )
;}

const ContainerMenu = styled.div`
    font-family: 'Poppins', sans-serif;
    height: 50px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        color: #FFFFFF;
        font-size: 20px;
    }
`

const MenuLeft = styled.div`
    margin-left: 470px;
    display: flex;
    gap: 40px;
`

const MenuRight = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;
    gap: 40px;
    ion-icon{
        color: #FFFFFF;
        width: 30px;
        height: 30px;
    }
`