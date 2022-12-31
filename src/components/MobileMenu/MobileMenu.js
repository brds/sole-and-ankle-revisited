/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
  <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <Content aria-label="Menu">
      <Top>
        <UnstyledButton onClick={onDismiss}>
          <VisuallyHidden>Close Menu</VisuallyHidden>
          <Icon id="close" />
        </UnstyledButton>
      </Top>
      <Nav>
        <NavItem href="/sale">Sale</NavItem>
        <NavItem href="/new">New&nbsp;Releases</NavItem>
        <NavItem href="/men">Men</NavItem>
        <NavItem href="/women">Women</NavItem>
        <NavItem href="/kids">Kids</NavItem>
        <NavItem href="/collections">Collections</NavItem>
      </Nav>
      <Growing>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Growing>
    </Content>
  </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  inset: 0;
  background-color: var(--color-gray-transparent);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  max-width: 100%;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;

const Growing = styled.div`
  flex: 1;
  display: flex;
`;

const Top = styled(Growing)`
  justify-content: flex-end;
  align-items: flex-start;
  padding: 26px 16px 0 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  `;

const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
`;

const Footer = styled.footer`
  margin-top: auto;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;
