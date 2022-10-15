import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Logo } from '../../globalStyles.styled';
import {
  AppHeader,
  MenuBurger,
  Microphone,
  BackButton,
  HeaderWrapper,
} from './Header.styled';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const historyBtnHandle = () => {
    const { pathname } = location;
    if (pathname.includes('category')) {
      navigate('/');
    }
    if (pathname.includes('details')) {
      navigate({
        pathname: '/',
      });
    }
  };

  return (
    <>
      <AppHeader>
        <HeaderWrapper>
          <BackButton onClick={historyBtnHandle} />
          <Logo>MyTicketO</Logo>
        </HeaderWrapper>
        <HeaderWrapper>
          <Microphone />
          <MenuBurger />
        </HeaderWrapper>
      </AppHeader>
    </>
  );
};

export default Header;
