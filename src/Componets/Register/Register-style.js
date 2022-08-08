import styled from 'styled-components'


export const Top = styled.div`
display: flex;
position: absolute;
top: 20px;
right: 20px;
box-sizing: border-box;

p{
    cursor: pointer;
    margin: 0 10px;
    color:#9C9C9C;
}

span{
    color: #5D9040;
}
`

export const Main = styled.div`

margin: 50px 20% 0 20%;
display: flex;
flex-direction: column;

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input{
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button{
    width: 200px;
    height: 60px;
    margin-top: 20px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: #5D9040;
    box-shadow: 3px 3px 4px lightgray;
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

display: flex;
`