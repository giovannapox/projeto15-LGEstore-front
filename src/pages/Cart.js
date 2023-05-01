import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Topo from "../components/Topo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            alert("É necessário fazer login para acessar o carrinho")
            navigate("/");
            return;
        }
        const url = `${process.env.REACT_APP_API_URL}/carts`;
        const promise = axios.get(url, { headers: { "Authorization": `${localStorage.getItem("token")}` } })
        promise.then((res) => {
            setCart(res.data);
        })
        promise.catch((err) => {
            return alert(err.response.data);
        })
    }, [cart]);
    
    function somaValores (){
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            total += Number(cart[i].price)
        }

        return total.toFixed(2);
    }

    function finalizarCompra(){
        const url = `${process.env.REACT_APP_API_URL}/checkout`;

        const body = {
            cart,
            total: somaValores()
        }

        console.log(body)
        const config = {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            } 
        }

        const promisse = axios.post(url,body,config)

        promisse.then((res)=>{
            alert("Compra realizada com sucesso")
        })

        promisse.catch((err)=>{
            console.log(err.response.message)
        })
    }

    return (
        <>
            <Topo />
            <Menu />
            <ContainerCart>
                {(cart.length === 0) ?
                    <p>O carrinho está vazio!</p> :
                    cart.map((c) =>
                        <Item>
                            <img src={c.img} alt="imagem do jogo"/>
                            <Title>
                                <h1>{c.title}</h1>
                                <p>{c.description}</p>
                                <h2><span>R$</span> {c.price}</h2>
                            </Title>
                        </Item>
                    )}
                <ContainerTotal>
                    <p>Total:</p>
                    <p> R$ {somaValores()}</p>
                </ContainerTotal>
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            </ContainerCart>
        </>
    )
}



const Item = styled.div`
    margin-top: 20px;
    position: relative;
    border-radius: 5px;
    width: 900px;
    height: 200px;
    background-color: #FFFFFF;
    display: flex;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    img{
        width: 160px;
        height: 200px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 25px;
        margin-top: 15px;
        margin-left: 10px;
    }
    p{
        margin-top: 30px;
        margin-left: 10px;
        margin-right: 10px;
        height: 100px;
        text-align: justify;
    }
    h2{
        font-size: 25px;
        align-self: flex-end;
        margin-right: 10px;
    }
`

const ContainerTotal = styled.div`
    margin-top: 20px;
    width: 880px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    padding-right: 10px;
    padding-left: 10px;
    p{
        font-size: 30px;
    }
`

const ContainerCart = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        margin-top: 20px;
        width: 900px;
        height: 60px;
        margin-bottom: 20px;
        background-color: #00FF00;
    }
    p{
        margin-top: 20px;
    }
`