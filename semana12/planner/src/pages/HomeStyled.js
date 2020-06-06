import Styled from "styled-components";
import Background from "../img/Background.jpg";

export const Container = Styled.main`
    background-image: url(${Background});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: repeat;
    background-color: #c9e6e8;
`;

export const Header = Styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1vh solid #2b393b;
`;

export const FormHeader = Styled.form`
    display: flex;
    width: 100%;
    height: 60%;
    justify-content: space-around;

    select {
        margin-left: 1vw;
        border: none;
        border-bottom: 1px solid #2b393b;
        border-radius: 5px;
        width: 13vw;
        height: 100%;
        font-size: 1.1em;
    }

    label {
        font-weight: bold;
    }
`;

export const Input = Styled.input`
    margin-left: 1vw;
    border: none;
    border-bottom: 1px solid #2b393b;
    border-radius: 5px;
    height: 100%;
    font-size: 1.1em;
`;

export const Button = Styled.button`
    border: none;
    border-radius: 5px;
    background-color: #2b393b;
    color: white;
    font-size: 1.1em;

    :hover {
        cursor: pointer;
    }
`

export const Content = Styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ContainerDay = Styled.section`
    border: 1vh double #2b393b;
    border-radius: 10px;
    margin-top: 4vh;
    width: 28vw;
    min-height: 60vh;
    background-color: #6e8492;
    padding: 1vw;

    li {
        font-size: 1.1em;
        display: flex;
        justify-content:space-between;
        margin-top: 1vh;
    }
`

export const ContainerButtons = Styled.section`
    display: flex;
    width: 8vw;
    justify-content: space-around;
`

export const ContainerEditar = Styled.section`
   height: 20vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 1vh;

   form {
       height: 100%;
       display: flex;
       align-items: center;
       align-content: space-between;
       flex-direction: column;
       justify-content: space-between;

       div {
           margin-top: 1vh;
           display: flex;
            width: 12vw;
            justify-content: space-around;
       }
   }
`