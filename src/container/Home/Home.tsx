import React from 'react';

import { Button } from '@mui/material';

import { Container, Title } from '../../styles';

function Home() {
  function onClick() {
    console.log('click');
  }
  return (
    <Container>
      <Title>Google Analytics Workshop</Title>
      <Button title="Get more info" onClick={onClick} href="/help">Get more info</Button>
    </Container>
  );
}

export default Home;
