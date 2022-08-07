import { useContext, useEffect, useState } from "react";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import logo from '../../Assets/IMG/logo.png'
import { useNavigate } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { Top, Main, Logo, Buttons, UserUrls, Delete, Infos, ShortUrl } from './Menu-style'
import TokenContext from "../Contexts/TokenContext";
import axios from "axios";

function Menu() {

    const [url, setUrl] = useState('');
    const { token } = useContext(TokenContext)
    const [infos, setInfos] = useState([])

    let navigate = useNavigate()

    function encodeUrl(event) {
        event.preventDefault();
        // const body = {
        //     email,
        //     password
        // }
        // if (password.length < 6) {
        //     alert('Digite os dados corretamente!')
        // }
        // else {

        //     const promise = axios.post('https://project-shortly-16.herokuapp.com/signin', body)

        //     promise.then(res => {
        //         console.log(res.data)
        //         navigate('/cadastro')
        //     })
        //         .catch(err => {
        //             console.log(err)
        //         })

        // }
        console.log(token)
    }

    useEffect(() => {
        const promise = axios.get('https://project-shortly-16.herokuapp.com/users/me', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        promise.then(res => {
            console.log(res.data)
            setInfos(res.data)
        }).catch(err => console.log(err))
    }, [])


    console.log()
    // console.log(infos.shortenedUrls)

    function ShowMyUrls({ item }) {
        return (
            <ShortUrl>
                <Infos>
                    <p>{item.url}</p>
                    <p>{item.shortUrl}</p>
                    <p>{item.visitCount}</p>
                </Infos>
                <Delete>
                    <BsFillTrashFill color="#EA4F4F" size={25} />
                </Delete>
            </ShortUrl>
        )
    }

    return (
        <Container>
            <Top>
                <h2>Ola, {infos.name}!</h2>
                <Buttons>
                    <p onClick={() => { navigate('/') }}>Home</p>
                    <p onClick={() => { navigate('/') }}>Ranking</p>
                    <p onClick={() => { navigate('/') }}>Sair</p>
                </Buttons>
            </Top>
            <Main>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo} />
                </Logo>
                <form onSubmit={encodeUrl}>
                    <Input placeholder="Links que cabem no bolso" onChange={(e) => { setUrl(e.target.value) }} value={url} />
                    <button>Encurtar link</button>
                </form>
                <UserUrls>
                    {(infos.length === 0) ?
                        '' :
                        (infos.shortenedUrls).map((item) => { return (<ShowMyUrls item={item} />) })
                    }
                </UserUrls>
            </Main>
        </Container>
    )
}

export default Menu;