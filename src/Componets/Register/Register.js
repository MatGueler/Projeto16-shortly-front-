import { Container } from "../Container/Container";
import { Main, Top, Logo } from '../Register/Register-style'
import logo from '../../Assets/IMG/logo.png'
import { Input } from "../Input/Input";

function Register() {
    return (
        <Container>
            <Top>
                <p>Entrar</p>
                <p>Cadastrar-se</p>
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