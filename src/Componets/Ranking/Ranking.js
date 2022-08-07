import { Container } from "../Container/Container";
import logo from '../../Assets/IMG/logo.png'
import { useNavigate } from 'react-router-dom'
import { Top, Buttons, Main, Logo, Positions, LogoRank } from './Ranking-style'
import { FaTrophy } from 'react-icons/fa'


function Ranking() {

    let navigate = useNavigate();

    return (

        <Container>
            <Top>
                <Buttons>
                    <p onClick={() => { navigate('/') }}>Entrar</p>
                    <p onClick={() => { navigate('/') }}>Cadastrar-se</p>
                </Buttons>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <LogoRank>
                    <FaTrophy color="#FFD233" size={50} />
                    <h3>Ranking</h3>
                </LogoRank>
                <Positions>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                    <p>1. Mateus Gueler - 32 links - 1.703.584 visualizações </p>
                </Positions>
                <h4>Crie sua conta para usar nosso serviço!</h4>
            </Main>
        </Container>
    )
}

export default Ranking;