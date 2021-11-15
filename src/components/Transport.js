import React from 'react';
import styled from '@emotion/styled';
import imgUno from '../images/motocicleta.svg';

const ContainerTrans = styled.div`
    max-width: 450px;
    margin: auto;

`;

const Transport = () => {
    return ( 
        <ContainerTrans>
            <img src={imgUno} alt="automovil"></img>
        </ContainerTrans>
     );
}
 
export default Transport;