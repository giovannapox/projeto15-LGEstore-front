import Topo from "../components/Topo";
import Menu from "../components/Menu";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
    const [user, setUser] = useState({email: "", password: ""});
    const navigate = useNavigate();

    function SignIn (e){
        e.preventDefault();

        if(!user) return alert("Preencha todos os campos");

        const url = "http://localhost:5000/";
        const promise = axios.post(url, user);
        promise.then((res) => {
            alert("Login realizado com sucesso!");
            const token =  `Bearer ${res.data.token}`;
            localStorage.setItem("token", token);
            navigate("/home");
        })
        promise.catch((err) => {
            alert(err.response.data);
        })
    }
    return (
        <>
            <Topo />
            <Menu />
            <SignInContainer>
                <form onSubmit={(e) => SignIn(e)}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        required
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        required
                    />
                    <button type="submit">Entrar</button>
                    <Link to="/cadastro">
                        Não tem uma conta? Cadastre-se agora!
                    </Link>
                </form>
            </SignInContainer>
        </>
    )
};

const SignInContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    a{
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: #000000;
        font-size: 20px;
    }
`
