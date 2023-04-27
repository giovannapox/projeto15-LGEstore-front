import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Topo from "../components/Topo";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [body, setBody] = useState({name: "", email: "", password: ""});
    const [confirmPassword, setConfirmPassword] = useState();
    function SignUp (e) {
        e.preventDefault();

        if(body.password !== confirmPassword) return alert("As senhas não coincidem");
        const url = "http://localhost:5000/cadastro";
        const promise = axios.post(url, body);
        promise.then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        promise.catch((err) => {
            alert(err.response.data);
        
        })
    }
    
    
    return (
        <>
            <Topo />
            <Menu />
            <SignUpContainer>
                <form onSubmit={(e) => SignUp(e)}>
                    <input
                        placeholder="Nome"
                        type="text"
                        value = {body.name}
                        onChange={(e) => setBody({...body, name: e.target.value})}
                        required
                    />
                    <input
                        placeholder="E-mail"
                        type="email"
                        value = {body.email}
                        onChange={(e) => setBody({...body, email: e.target.value})}
                        required
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        value = {body.password}
                        onChange={(e) => setBody({...body, password: e.target.value})}
                        required
                    />
                    <input
                        placeholder="Confirme a senha"
                        type="password"
                        value = {confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                    <Link to="/login">
                        Já tem uma conta? Entre agora!
                    </Link>
                </form>
            </SignUpContainer>
        </>
    )
};

const SignUpContainer = styled.div`
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
