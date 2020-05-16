import Styled from 'styled-components'

export const Container = Styled.div`
    width: 35vw;
    height: 90vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    border-radius: 5px;
`

export const FlexContainer = Styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Header = Styled.div`
    height: 10vh;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    border-bottom: 1px solid lightgrey;
    padding: 0 1vw;
`

export const Cursor = Styled.div`
    cursor: pointer;
    transition: all 0.2s ease 0s;
`

export const LogoApp = Styled.img`
    height: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 15vw;
`

export const MatchButton = Styled.div`
    cursor: pointer;
    transition: all 0.2s ease 0s;

    img {
        display: block;
        width: 3vw;
        height: 7vh;
    }
`

export const Main = Styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 1vw 1vw 0;
    flex: 1 1 0%;
`

export const ContainerFoto = Styled.div`
    box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
    position: relative;
    height: 64vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1vw;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    animation: 0.5s ease 0s 1 normal forwards running none;
`

export const ImagemPerfil = Styled.img`
    width: 100%;
    display: block;
    z-index: 1;
`

export const ContainerDados = Styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 90%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    z-index: 2;
    padding: 2vw;
`

export const NomeIdade = Styled.div`
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
`

export const Nome = Styled.div`
    font-weight: bold;
    font-size: 1.5em;
`

export const Idade = Styled.div`
    margin-left: 1vw;
    font-size: 1.1em;
`

export const Bio = Styled.p`
    margin-top: 2vh; 
`

export const ContainerButtons = Styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 1vw 0;
`

export const Nope = Styled.button`
    width: 6vw;
    height: 6vw;
    color: red;
    font-size: 3em;
    transform: scale(0.7);
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: red;
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
`

export const Like = Styled.button`
    width: 6vw;
    height: 6vw;
    color: green;
    font-size: 3em;
    transform: scale(0.7);
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: green;
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
`