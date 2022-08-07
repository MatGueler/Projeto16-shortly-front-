import styled from 'styled-components'

export const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
box-sizing: border-box;
`

export const Main = styled.div`

margin: 50px 20% 0 20%;
display: flex;
flex-direction: column;

h4 {
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
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
    color:#5D9040;
}

p:last-child{
    color: #9C9C9C;
}
`

export const Positions = styled.div`
width: 100%;
display: flex;
flex-direction: column;
border: 1px solid lightgray;
border-radius: 5px;
padding: 10px 20px;
box-sizing: border-box;
margin-bottom: 50px;
box-shadow: 1px 1px 50px lightgray;

p{
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
}
p:last-child{
    margin-bottom: 0;
}
`

export const LogoRank = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;

h3 {
    font-size: 36px;
    font-weight: bold;
    margin: 0 20px;
}
`