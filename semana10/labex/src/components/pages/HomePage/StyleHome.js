import Background from "../../../images/mainWallpaper.jpg";
import Styled from "styled-components";

export const Container = Styled.main`
    width: 90vw;
`;

export const Content = Styled.section`
    height: 130vh;
    background-image: url(${Background});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(10,23,55,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h1 {
        font-size: 4em;
    }

    h3 {
        font-size: 2em;
    }

    Button {
        font-size: 1.5em;
        font-weight: bold;
        border: 2px solid white;
    }
`;
