import React from 'react';
import { SiReactos } from 'react-icons/si';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SocialIcons } from '../Header/HeaderStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = "tel:+917895341037">78953 41037</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = "mailto:prokximus@gmail.com">prokximus@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Code once, release everywhere</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/SyedAdeebWebDesigning/SyedAdeebWebDesigning" target="1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://discord.gg/58J5mr96TN" target="1">
        <FaDiscord size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/prokximus" target="1">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
