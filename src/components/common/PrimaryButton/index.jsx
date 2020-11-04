import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonBase = styled.button`
  text-transform: uppercase;
  outline: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90.2deg, #2f29bf -21.41%, rgba(255, 255, 255, 0) 134.41%), #b118c8;
  padding: 1.2rem 4.3rem;
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0px 10px 30px rgba(47, 41, 191, 0.3), 0px -10px 30px rgba(177, 24, 200, 0.3);
    transform: translateY(-5px);
  }

  &:active {
    background: linear-gradient(90.2deg, #2f29bf -40%, rgba(255, 255, 255, 0) 90%), #b118c8;
    transform: translateY(0);
    box-shadow: 0px 5px 10px rgba(47, 41, 191, 0.3), 0px -5px 10px rgba(177, 24, 200, 0.3);
  }

  @media (min-width: 960px) {
    font-size: 1rem;
    padding: 1.4rem 5rem;
  }
`;

export default function PrimaryButton({ onClick, children }) {
  return <ButtonBase onClick={onClick}>{children}</ButtonBase>;
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
