import { Container } from "../Container/Container";
import { Main, Top, Logo } from '../Login/Login-style'
import logo from '../../Assets/IMG/logo.png'

function Login() {
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
                    <input placeholder="Email" />
                    <input placeholder="Senha" />
                    <button>Entrar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Login;