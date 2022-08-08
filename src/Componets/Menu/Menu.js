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
    const { token, setToken, setInfos, infos } = useContext(TokenContext)
    const [updatePage, setUpdatePage] = useState(true)

    let navigate = useNavigate()

    function encodeUrl(event) {
        event.preventDefault();

        const body = {
            url
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.post('https://project-shortly-16.herokuapp.com/urls/shorten', body, config)

        promise.then(res => {
            setUrl('')
            setUpdatePage(!updatePage)
        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        const promise = axios.get('https://project-shortly-16.herokuapp.com/users/me', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }, [infos])

        promise.then(res => {
            setInfos(res.data)
        }).catch(err => console.log(err))
    }, [updatePage])

    function ShowMyUrls({ item }) {
        return (
            <ShortUrl>
                <Infos>
                    <p>{item.url}</p>
                    <p>{item.shortUrl}</p>
                    <p>{item.visitCount}</p>
                </Infos>
                <Delete onClick={deleteUrl}>
                    <BsFillTrashFill color="#EA4F4F" size={25} />
                </Delete>
            </ShortUrl>
        )

        function deleteUrl() {

            const promise = axios.delete(`https://project-shortly-16.herokuapp.com/urls/${item.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            promise.then(res => {
                setUpdatePage(!updatePage)
            }).catch(err => console.log(err))
        }
    }

    return (
        <Container>
            <Top>
                <h2>Ola, {infos.name}!</h2>
                <Buttons>
                    <p onClick={() => { navigate('/acessar') }}>Acessar</p>
                    <p onClick={() => { navigate('/menu') }}>Home</p>
                    <p onClick={() => { navigate('/ranking/geral') }}>Ranking</p>
                    <p onClick={() => {
                        setToken('')
                        navigate('/')
                    }}>Sair</p>
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
                        (infos.shortenedUrls).map((item, index) => { return (<ShowMyUrls key={index} item={item} />) })
                    }
                </UserUrls>
            </Main>
        </Container>
    )
}

export default Menu;