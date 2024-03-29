import { Container } from '../Container/Container';
import logo from '../../Assets/IMG/logo.png';
import { useNavigate } from 'react-router-dom';
import { Top, Buttons, Main, Logo, Positions, LogoRank } from './Ranking-style';
import { FaTrophy } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';

function Ranking() {
	const [updatePage, setUpdatePage] = useState(true);
	const [ranking, setRanking] = useState([]);

	const { token, setToken, infos } = useContext(TokenContext);

	let navigate = useNavigate();

	useEffect(() => {
		const promise = axios.get(`${process.env.REACT_APP_BACK_END_URL}/ranking`);

		promise
			.then((res) => {
				setRanking(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	function ShowRanking({ item, index }) {
		return (
			<p>
				{index + 1}. {item.name} - {item.linksCount} links - {item.visitCount}{' '}
				visualizações{' '}
			</p>
		);
	}

	return (
		<Container>
			{token === '' ? (
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
							<span>Ranking</span>
						</p>
						<p
							onClick={() => {
								navigate('/');
							}}>
							Entrar
						</p>
						<h3
							onClick={() => {
								navigate('/cadastro');
							}}>
							Cadastrar-se
						</h3>
					</Buttons>
				</Top>
			) : (
				<Top>
					<h2>Ola, {infos.name}!</h2>
					<Buttons>
						<p
							onClick={() => {
								navigate('/acessar');
							}}>
							Acessar
						</p>
						<p
							onClick={() => {
								navigate('/menu');
							}}>
							Home
						</p>
						<p
							onClick={() => {
								navigate('/ranking/geral');
							}}>
							Ranking
						</p>
						<p
							onClick={() => {
								setToken('');
								navigate('/');
							}}>
							Sair
						</p>
					</Buttons>
				</Top>
			)}

			<Main>
				<Logo>
					<h1>Shortly</h1>
					<img src={logo} alt='' />
				</Logo>
				<LogoRank>
					<FaTrophy color='#FFD233' size={50} />
					<h3>Ranking</h3>
				</LogoRank>
				<Positions>
					{ranking.length === 0
						? ''
						: ranking.map((item, index) => {
								return <ShowRanking key={index} item={item} index={index} />;
						  })}
				</Positions>
				{token === '' ? <h4>Crie sua conta para usar nosso serviço!</h4> : ''}
			</Main>
		</Container>
	);
}

export default Ranking;
