import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2f29bf;
  border: 2px solid #2f29bf;
  border-radius: 50px;
  padding: 0.6rem 2rem;
  transition-duration: 0.2s;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0px 10px 20px rgba(47, 41, 191, 0.3), 0px -10px 20px rgba(177, 24, 200, 0.3);
    transform: translateY(-3px);
  }

  &:active {
    border: 2px solid #b118c8;
    color: #b118c8;
    box-shadow: 0px 3px 7px rgba(47, 41, 191, 0.3), 0px -3px 7px rgba(177, 24, 200, 0.3);
    transform: translateY(0);
  }

  @media (min-width: 960px) {
    font-size: 0.9rem;
    padding: 0.6rem 2.3rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  font-size: 1rem;

  @media (min-width: 960px) {
    font-size: 1.1rem;
  }
`;

export default function LinkButton({ children, href, icon = null }) {
  return (
    <ButtonBase href={href}>
      {icon && <Icon icon={icon} />}
      <span>{children}</span>
    </ButtonBase>
  );
}

/* eslint-disable react/forbid-prop-types */
LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

LinkButton.defaultProps = {
  icon: null,
};
