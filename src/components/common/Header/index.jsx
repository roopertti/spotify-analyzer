import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import LinkButton from '../LinkButton';

const Brand = styled.h1`
  display: inline-flex;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  box-shadow: 0px 4px 30px 0px #b118c8 30%;
  background-color: #2f29bf;
  background-image: linear-gradient(90.05deg, #2f29bf -15.19%, rgba(255, 255, 255, 0) 46.55%),
    linear-gradient(90.13deg, #b118c8 46.55%, rgba(255, 255, 255, 0) 142.37%), linear-gradient(0deg, #ff8600, #ff8600);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  box-shadow: 0px 10px 30px rgba(47, 41, 191, 0.3), 0px -10px 30px rgba(177, 24, 200, 0.3);

  @media (max-width: 960px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const menuOpenAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1
    transform: translateX(0);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.3);
    animation: 0.3s ease 0s 1 ${menuOpenAnimation};
    transition: opacity 0.5;
    opacity: ${(props) => '1' && props.opacity};
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 7rem 3rem 0 0;
  animation: 0.5s ease 0s 1 ${slideInFromLeft};
  transition: opacity 0.15s;
  opacity: ${(props) => '1' && props.opacity};

  @media (max-width: 960px) {
    padding: 6rem 2rem 0 0;
  }

  @media (max-width: 600px) {
    padding: 6rem 1.5rem 0 0;
  }

  button {
    margin-bottom: 1.5rem;
  }

  a {
    margin-bottom: 1.5rem;
    z-index: 3;
  }
`;

const MenuButton = styled.button`
  font-size: 2rem;
  outline: none;
  z-index: 3;
  background: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #b118c8;
  border: none;

  transform: ${(props) => (props.flipped ? 'rotate(180deg)' : 'none')};
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.flipped
        ? '0px -10px 30px rgba(177, 24, 200, 0.3), 0px 10px 30px rgba(47, 41, 191, 0.3);'
        : '0px 10px 30px rgba(47, 41, 191, 0.3), 0px -10px 30px rgba(177, 24, 200, 0.3);'};
  }

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

function MobileMenu({ onClose }) {
  const [closing, setClosing] = React.useState(false);
  const menuRef = React.useRef(null);

  const handleBackdropClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setClosing(true);
      setTimeout(onClose, 500);
    }
  };

  return (
    <Backdrop data-testid="backdrop" onClick={handleBackdropClick} opacity={closing ? 0 : null}>
      <MobileNav ref={menuRef} data-testid="mobile-menu" opacity={closing ? 0 : null}>
        <LinkButton className="link" href="#">
          Authorize
        </LinkButton>
        <LinkButton className="link" href="#">
          Features
        </LinkButton>
        <LinkButton className="link" href="#">
          Github
        </LinkButton>
      </MobileNav>
    </Backdrop>
  );
}

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <StyledHeader>
      <Brand>Spotify analyzer</Brand>
      <MenuButton data-testid="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} flipped={mobileMenuOpen}>
        <FontAwesomeIcon icon={faCaretDown} />
      </MenuButton>
      {mobileMenuOpen && <MobileMenu data-testid="mobile-menu" onClose={() => setMobileMenuOpen(false)} />}
    </StyledHeader>
  );
}
