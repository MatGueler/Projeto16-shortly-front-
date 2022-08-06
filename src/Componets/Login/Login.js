import { Container } from "../Container/Container";
import { Main, Top, Logo } from '../Login/Login-style'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/IMG/logo.png'
import { Input } from "../Input/Input";
import axios from 'axios'
import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()

    function signIn(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }
        if (password.length < 6) {
            alert('Digite os dados corretamente!')
        }
        else {

            const promise = axios.post('https://project-shortly-16.herokuapp.com/signin', body)

            promise.then(res => {
                console.log(res.data)
                navigate('/cadastro')
            })
                .catch(err => {
                    console.log(err)
                })

        }
    }

    return (
        <Container>
            <Top>
                <p onClick={() => { navigate('/') }}>Entrar</p>
                <p onClick={() => { navigate('/cadastro') }}>Cadastrar-se</p>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <form onSubmit={signIn}>
                    <Input placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <button>Entrar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Login;