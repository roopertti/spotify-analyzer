import React from 'react';

import PrimaryButton from './components/common/PrimaryButton';

function initAuth() {
  console.log('Auth start');
}

export default function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <PrimaryButton onClick={initAuth}>Authorize</PrimaryButton>
    </div>
  );
}
