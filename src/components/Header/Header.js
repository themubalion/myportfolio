import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { SiReactos } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a href="" style={ { display: "flex", alignItems: "center", color: "white", marginBottom: "17px", margin: "0 0 17px" } }>
          <SiReactos size="3rem" /> <Span style={ { padding: "0 15px" } }>Prokximus</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>

      <SocialIcons href="https://github.com/SyedAdeebWebDesigning/SyedAdeebWebDesigning" target="1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://discord.gg/58J5mr96TN" target="1">
        <FaDiscord size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/prokximus" target="1">
        <AiFillInstagram size="3rem" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
