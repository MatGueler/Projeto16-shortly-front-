import { Container } from "../Container/Container";
import { Main, Top, Logo } from '../Register/Register-style'
import logo from '../../Assets/IMG/logo.png'
import { Input } from "../Input/Input";
import { useNavigate } from 'react-router-dom'

function Register() {

    let navigate = useNavigate()

    return (
        <Container>
            <Top>
                <p onClick={() => { navigate('/ranking/geral') }}>Ranking</p>
                <p onClick={() => { navigate('/') }}>Entrar</p>
                <p onClick={() => { navigate('/cadastro') }}><span>Cadastrar-se</span></p>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <form>
                    <Input placeholder="Nome" />
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" />
                    <Input placeholder="Confirmar senha" />
                    <button>Cadastrar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Register;