import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/common/Layout';
import PrimaryButton from '../../components/common/PrimaryButton';

/* eslint-disable no-console */
function initAuth() {
  console.log('Test');
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 1rem;

  & > h1 {
    font-size: 1.5rem;
  }

  & > h5 {
    font-size: 1rem;
    color: #343434;
    margin-bottom: 3rem;
  }

  @media (min-width: 960px) {
    & > h1 {
      font-size: 2.5rem;
    }

    & > h5 {
      color: #343434;
      font-size: 1.5rem;
      margin-bottom: 5rem;
    }
  }

  @media (min-width: 600px) {
    & > h1 {
      font-size: 2rem;
    }

    & > h5 {
      color: #343434;
      font-size: 1.1rem;
      margin-bottom: 4rem;
    }
  }
`;

export default function LangingPage() {
  return (
    <Layout>
      <Section>
        <h1>Authorize with your Spotify account to analyze tracks.</h1>
        <h5>Authorization is required to access your playlists.</h5>
        <PrimaryButton onClick={initAuth}>Authorize</PrimaryButton>
      </Section>
    </Layout>
  );
}
