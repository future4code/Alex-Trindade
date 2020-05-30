import React from "react";
import Styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Container = Styled.main`
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialMedia = Styled.section`
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin-top: 1vh;
    margin-botton: 1vh;

    a {
        text-decoration: none;
        color: black;
    }
`;

const Footer = () => {
  return (
    <Container>
      <SocialMedia>
        <a href='https://github.com/alex-t06'>
          <GitHubIcon />
        </a>
        <a href='https://www.facebook.com/Labenu-388131481831991/'>
          <FacebookIcon />
        </a>
        <a href='https://www.linkedin.com/school/labenu/'>
          <LinkedInIcon />
        </a>
        <a href='https://www.instagram.com/labenu_/'>
          <InstagramIcon />
        </a>
      </SocialMedia>
      <div>
        <span>© 2020 por Alex Trindade.</span>
      </div>
    </Container>
  );
};

export default Footer;
