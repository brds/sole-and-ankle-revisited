import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
        <MobileActions>
          <UnstyledButton>
            <VisuallyHidden>Visit Shopping Cart</VisuallyHidden>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open Menu</VisuallyHidden>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileActions>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);

  max-width: 100%;
  overflow-x: auto;

  gap: clamp(
    1rem,
    11.7vw - 5.25rem,
    3rem
  );

  @media ${props => props.theme.queries.tabletAndSmaller} {
    align-items: center;
    padding-right: 24px;
    border-top: 4px solid var(--color-gray-900);
  }
  @media ${props => props.theme.queries.phoneAndSmaller} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;

  gap: clamp(
    1rem,
    11.7vw - 5.25rem,
    3rem
  );

  margin: 0px 48px;
  @media ${props => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${props => props.theme.queries.tabletAndSmaller} {
    flex: revert;
    margin-right: auto;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${props => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${props => props.theme.queries.tabletAndSmaller} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;
  }
  @media ${props => props.theme.queries.phoneAndSmaller} {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
