import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
