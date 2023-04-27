import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Topo() {
    return (
        <Header>
            <img src={logo} alt="logo" />
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
`