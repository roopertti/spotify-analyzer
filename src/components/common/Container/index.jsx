import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
  flex: 1 0 auto;

  @media (min-width: 600px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
    width: 960px;
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
