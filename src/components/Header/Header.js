import React from 'react';
import { Logo } from '../../globalStyles.styled';
import {
  AppHeader,
  MenuBurger,
  Microphone,
  BackButton,
  HeaderWrapper,
} from './Header.styled';

const Header = () => (
  <>
    <AppHeader>
      <HeaderWrapper>
        <BackButton />
        <Logo>MyTicketO</Logo>
      </HeaderWrapper>
      <HeaderWrapper>
        <Microphone />
        <MenuBurger />
      </HeaderWrapper>
    </AppHeader>
  </>
);

export default Header;
