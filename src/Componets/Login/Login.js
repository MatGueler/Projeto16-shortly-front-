import { Container } from '../Container/Container';
import { Main, Top, Logo, Buttons } from '../Login/Login-style';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/IMG/logo.png';
import { Input } from '../Input/Input';
import axios from 'axios';
import { useContext, useState } from 'react';
import TokenContext from '../Contexts/TokenContext';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setToken } = useContext(TokenContext);

	let navigate = useNavigate();

	function signIn(event) {
		event.preventDefault();
		const body = {
			email,
			password,
		};
		if (password.length < 6) {
			alert('Digite os dados corretamente!');
		} else {
			const promise = axios.post(
				`${process.env.REACT_APP_BACK_END_URL}/signin`,
				body
			);

			promise
				.then((res) => {
					setToken(res.data);
					navigate('/menu');
				})
				.catch((err) => {
					alert(err.response.data);
				});
		}
	}

	return (
		<Container>
			<Top>
				<h2></h2>
				<Buttons>
					<p
						onClick={() => {
							navigate('/acessar');
						}}>
						Acessar
					</p>
					<p
						onClick={() => {
							navigate('/ranking/geral');
						}}>
						Ranking
					</p>
					<p
						onClick={() => {
							navigate('/');
						}}>
						<span>Entrar</span>
					</p>
					<p
						onClick={() => {
							navigate('/cadastro');
						}}>
						Cadastrar-se
					</p>
				</Buttons>
			</Top>
			<Main>
				<Logo>
					<h1>Shortly</h1>
					<img src={logo} />
				</Logo>
				<form onSubmit={signIn}>
					<Input
						type='text'
						placeholder='Email'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
					<Input
						type='password'
						placeholder='Senha'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
					<button>Entrar</button>
				</form>
			</Main>
		</Container>
	);
}

export default Login;
