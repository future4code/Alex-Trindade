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

export const ProfileButton = Styled.div`
    cursor: pointer;
    transition: all 0.2s ease 0s;

    img {
        display: block;
        width: 3vw;
        height: 6vh;
    }
`

export const Lista = Styled.ul`
    padding: 0 1vw;
    list-style: none;
`

export const ItemLista = Styled.li`
    position: relative;
    height: 10vh;
    display: flex;
    width: 100%;
    cursor: pointer;
    padding: 1vw;
    list-style: none;
    transition: all 0.2s ease 0s;
`

export const PerfilImage = Styled.img`
    height: 10vh;
    width: 5vw;
    margin-right: 1vw;
    border-radius: 50%;
`