import React,{ Fragment } from 'react';
import styled from '@emotion/styled';


const AlertData = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-left:50px ;
    width: 400px;
`;

const Entrada = styled.div`
    font-family: 'Lato', sans-serif;
    margin: 20px 0;

`;

const Horas = styled.span`
    background-color: #FB5B3B;
    font-weight: bold;
    color: white;
    margin: 0 3px;
    padding: 5px;
    border-radius: 10px;
`;

const Parkin= styled.h4`
    font-family: 'Lato', sans-serif;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
`;

const Tiempo = styled.span`
    font-weight: bold;
    color: #0f112e;
    border: 2px solid #0f112e;
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
    `;

const Precio = styled.span`
     font-weight: bold;
     display: flex;
     justify-content: center;
     align-items: center;
     color: white;
     background-color: #FFC300 ;
     width: 120px;
     height: 30px;
     padding: 10px;
     border-radius: 15px;
     margin: 5px 0;
`;

const Result = ({data, horasParking, precioParking}) => {

    const {hourOne, hourTwo, type} = data;

    if(hourOne==='' || hourTwo === '' || type === '' || horasParking === '' || precioParking === '') return null;

    return (  
        <Fragment>
            <AlertData>
                <Entrada>Hora entrada <Horas>{hourOne} </Horas>- Hora salida <Horas>{hourTwo}</Horas></Entrada>
                <Parkin>Horas Estacionado<Tiempo>{horasParking}</Tiempo></Parkin>
                <Parkin>Total a Pagar <Precio>{precioParking}</Precio></Parkin>
            </AlertData>
        </Fragment>
    );
}
 
export default Result;
