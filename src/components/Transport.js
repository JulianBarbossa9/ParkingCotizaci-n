import React from 'react';
import styled from '@emotion/styled';
import imgUno from '../images/motocicleta.svg';
import imgDos from '../images/automovil.svg';

const ContainerTrans = styled.div`
    max-width: 400px;
    max-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

`;

const Transport = ({data}) => {
    
    const {type} = data; 

    const selecImage = type =>{
        if (type === "motorcycle"){
            return imgUno;
        } else {
            return imgDos;
        }
    }
    
    return ( 
        <ContainerTrans>
            <img src={selecImage(type)} alt="motocicleta"></img>
        </ContainerTrans>
     );
}
 
export default Transport;