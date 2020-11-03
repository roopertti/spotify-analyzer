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

const MenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #b118c8;
  border: none;
  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
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
