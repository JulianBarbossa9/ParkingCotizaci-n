import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import styled from '@emotion/styled';
import Transport from './components/Transport';


const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 3rem;
  
`;

const ContainerImg = styled.div`
  background-color: #0f112e;
  padding: 1.5rem;
`;

const ContainerForm = styled.div`
  background-color: white;
  padding: 4rem;
`;

function App() {
  return (
   <Container>
      <Header 
        title="Parking +: Tarifa Parqueaderos"
      />

      <ContainerImg>
        <Transport

        />        
      </ContainerImg>

      <ContainerForm>
        <Form />
      </ContainerForm>

   </Container>
  );
}

export default App;
