import { Container } from "../Container/Container";
import { Main } from '../Register/Register-style'

function Register() {
    return (
        <Container>
            <header>
                <button>Entrar</button>
                <button>Cadastrar-se</button>
            </header>
            <Main>
                <h1>Shortly</h1>
                <form>
                    <input />
                    <input />
                    <button>Cadastrar</button>
                </form>
            </Main>
        </Container>
    )
}

export default Register;