import React,{ useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import styled from '@emotion/styled';
import Transport from './components/Transport';
import Result from './components/Result';


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
  display: flex;
`;

function App() {
  
  const [ resumen , guardarDatosForm] = useState({
    horasParking:'',
    precioParking:'',
    data: {
      hourOne:'',
      hourTwo:'',
      type:''
    }
  });

  const {data, horasParking, precioParking} = resumen;
  
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
        <Form 
          guardarDatosForm={guardarDatosForm}
        />
        <Result 
          data={data}
          horasParking={horasParking}
          precioParking={precioParking}
        />
       
      </ContainerForm>

   </Container>
  );
}

export default App;
