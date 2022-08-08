import styled from 'styled-components'


export const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
box-sizing: border-box;

h2{
    color: #5D9040
}

p{
    cursor: pointer;
    margin: 0 10px;
}
`

export const Main = styled.div`

margin: 50px 20% 0 20%;
display: flex;
flex-direction: column;

form {
    display: flex;
    align-items: center;
}

button{
    width: 200px;
    height: 60px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: #5D9040;
    box-shadow: 3px 3px 8px lightgray;
}

input {
    margin:0 50px 0 0;
}
`

export const Logo = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 50px;

h1{
    text-align: center;
    font-size: 64px;
}
`

export const Buttons = styled.div`
display: flex;

p{
    cursor: pointer;
    margin: 0 10px;
    color:#9C9C9C;
}

p:last-child{
    text-decoration: underline;
}
`

export const UserUrls = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 50px;
`

export const Infos = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
background-color: #80CC74;
border-radius: 10px 0 0 10px;
padding: 0 10px;

p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    word-break: break-all;
    color: #FFFFFF;
    padding: 0 10px;
    box-sizing: border-box;
}
`

export const Delete = styled.div`
height: 60px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0 10px 10px 0;
cursor: pointer;
border: 1px solid lightgrey;
`

export const ShortUrl = styled.div`
width: 100%;
display: flex;
margin-bottom: 20px;
`