import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:+45-71533481'>+45-71533481</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:soujanyabonthu@gmail.com'>soujanyabonthu@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>@Created by Soujanya 2021</CompanyContainer>
      <SocialContainer>  
      <SocialIcons href='https://github.com/soujanyapolavarapu'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/soujanya-polavarapu-816785110/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      </SocialContainer>  
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
