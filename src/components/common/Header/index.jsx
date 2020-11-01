import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Brand = styled.h1`
  display: inline-flex;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  box-shadow: 0px 4px 30px 0px #B118C8 30%;
  background-color: #2F29BF;
  background-image: linear-gradient(90.05deg, #2F29BF -15.19%, rgba(255, 255, 255, 0) 46.55%),
    linear-gradient(90.13deg, #B118C8 46.55%, rgba(255, 255, 255, 0) 142.37%),
    linear-gradient(0deg, #FF8600, #FF8600);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;

  @media(max-width: 960px) {
    font-size: 1.8rem;
  }

  @media(max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  @media(max-width: 960px) {
    padding: 2rem;
  }

  @media(max-width: 600px) {
    padding: 1.5rem;
  }
`;

const MenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #B118C8;
  border: none;
  &:hover {
    background-color: #E5E5E5;
  }

  @media(max-width: 960px) {
    font-size: 1.8rem;
  }

  @media(max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Brand>Spotify analyzer</Brand>
      <MenuButton>
        <FontAwesomeIcon icon={faCaretDown} />
      </MenuButton>
    </StyledHeader>
  );
}
