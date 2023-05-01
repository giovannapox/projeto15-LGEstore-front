import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Topo from "../components/Topo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cart () {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")){
            alert("É necessário fazer login para acessar o carrinho")
            navigate("/");
            return;
          }
        const url = "http://localhost:5000/carts";
        const promise = axios.get(url, { headers: {"Authorization": `${localStorage.getItem("token")}` } })
        promise.then((res) => {
            setCart(res.data);
        })
        promise.catch((err) => {
            return alert(err.response.data);
        })
    }, []);

    return (
        <>
        <Topo />
        <Menu />
        {(cart.length === 0) ? 
        <p>O carrinho está vazio!</p> : 
        cart.map((c) =>
        <ItemCart>

        </ItemCart>)}
        </>
    )
}

const ItemCart = styled.div`
    height: 30px;
`