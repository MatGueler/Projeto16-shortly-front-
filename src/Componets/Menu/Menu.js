import { useState } from "react";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import logo from '../../Assets/IMG/logo.png'
import { useNavigate } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { Top, Main, Logo, Buttons, UserUrls, Delete, Infos, ShortUrl } from './Menu-style'

function Menu() {

    const [url, setUrl] = useState('');

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
        console.log('encurtei')
    }


    return (
        <Container>
            <Top>
                <h2>Ola, Fulano!</h2>
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
                    <ShortUrl>
                        <Infos>
                            <p>url</p>
                            <p>short url</p>
                            <p>quantidadeeeeeeee eeeeeeeeeeeee eeeeeeeeeee</p>
                        </Infos>
                        <Delete>
                            <BsFillTrashFill color="#EA4F4F" size={25} />
                        </Delete>
                    </ShortUrl>
                    <ShortUrl>
                        <Infos>
                            <p>url</p>
                            <p>short url</p>
                            <p>quantidadeeeeeeee eeeeeeeeeeeee eeeeeeeeeee</p>
                        </Infos>
                        <Delete>
                            <BsFillTrashFill color="#EA4F4F" size={25} />
                        </Delete>
                    </ShortUrl>
                </UserUrls>
            </Main>
        </Container>
    )
}

export default Menu;