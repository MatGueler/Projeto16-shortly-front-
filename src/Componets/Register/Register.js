import { Container } from "../Container/Container";
import { Main, Top, Logo } from '../Register/Register-style'
import logo from '../../Assets/IMG/logo.png'
import { Input } from "../Input/Input";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    let navigate = useNavigate();

    function SignUp(event) {

        event.preventDefault();

        const body = {
            name,
            email,
            password,
            confirmPassword
        }
        if (password.length < 8 || password !== confirmPassword) {
            alert('Digite os dados corretamente!')
        }
        else {

            const promise = axios.post('https://project-shortly-16.herokuapp.com/signup', body)

            promise.then(res => {
                navigate('/')
            })
                .catch(err => {
                    alert(err.response.data)
                })

        }
    }

    return (
        <Container>
            <Top>
                <p onClick={() => { navigate('/acessar') }}>Acessar</p>
                <p onClick={() => { navigate('/ranking/geral') }}>Ranking</p>
                <p onClick={() => { navigate('/') }}>Entrar</p>
                <p onClick={() => { navigate('/cadastro') }}><span>Cadastrar-se</span></p>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <form onSubmit={SignUp}>
                    <Input type='text' placeholder="Nome" onChange={(e) => { setName(e.target.value) }} value={name} />
                    <Input type='text' placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type='password' placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Input type='password' placeholder="Confirmar senha" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} />
                    <button>Cadastrar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Register;