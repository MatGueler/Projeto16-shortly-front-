import { useState } from "react";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import logo from '../../Assets/IMG/logo.png'
import { useNavigate } from 'react-router-dom'
import { Top, Main, Logo, Buttons } from './Open-style'
import axios from "axios";

function Open() {

    const [url, setUrl] = useState('');

    let navigate = useNavigate()

    function acessUrl(event) {

        event.preventDefault();

        const body = {}

        const URL = `https://project-shortly-16.herokuapp.com/urls/open/${url}`

        const promise = axios.get(URL, body)

        promise.then((res) => {
            const urlOriginal = (res.data).split(' ')
            window.location.href = urlOriginal[3]
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <Container>
            <Top>
                <h2></h2>
                <Buttons>
                    <p onClick={() => { navigate('/acessar') }}><span>Acessar</span></p>
                    <p onClick={() => { navigate('/ranking/geral') }}>Ranking</p>
                    <p onClick={() => { navigate('/') }}>Entrar</p>
                    <p onClick={() => { navigate('/cadastro') }}>Cadastrar-se</p>
                </Buttons>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <form onSubmit={acessUrl}>
                    <Input placeholder="Acesse o link" onChange={(e) => { setUrl(e.target.value) }} value={url} />
                    <button>Acessar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Open;