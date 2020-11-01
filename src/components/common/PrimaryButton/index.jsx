import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonBase = styled.button`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 19px;
  color: white;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90.2deg, #2F29BF -21.41%, rgba(255, 255, 255, 0) 134.41%), #B118C8;
  padding: 1.2rem 4.3rem;
  box-shadow: 0px 10px 30px rgba(47, 41, 191, 0.3), 0px -10px 30px rgba(177, 24, 200, 0.3);
  transition-duration: 0.3s;

  &:hover, &:focus {
    box-shadow: 0px 3px 7px rgba(47, 41, 191, 0.3), 0px -3px 7px rgba(177, 24, 200, 0.3);
  }

  &:active {
    background: linear-gradient(90.2deg, #2F29BF 0%, rgba(255, 255, 255, 0) 100%), #B118C8;
    box-shadow: none;
  }
`;

export default function PrimaryButton({ onClick, children }) {
  return (
    <ButtonBase onClick={onClick}>{children}</ButtonBase>
  );
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};