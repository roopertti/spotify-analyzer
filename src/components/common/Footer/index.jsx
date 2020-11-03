import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import LinkButton from '../LinkButton';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0 1.6rem;
  box-shadow: 0px 10px 30px rgba(47, 41, 191, 0.3), 0px -10px 30px rgba(177, 24, 200, 0.3);
`;

const FooterTitle = styled.p`
  margin: 1rem 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterTitle>Created by Robert Kuhlmann</FooterTitle>
      <LinkButton href="#" icon={faGithub}>
        Source code
      </LinkButton>
    </StyledFooter>
  );
}
