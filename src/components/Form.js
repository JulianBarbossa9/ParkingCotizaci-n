import React ,{Fragment, useState} from 'react';
import styled from '@emotion/styled';
import {receiveHours, priceMinute} from '../helper';



const Time = styled.div`
    display:flex;
    margin: 10px 30px;
    align-items: center;
    
`;

const Label = styled.label`
    flex:0 0 110px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 1rem;
    border : 2px solid #0f112e;
    border-radius: 20px;
    -webkit-appearance:none;
`;

const InputRatio = styled.input`
    margin: 0 0.5rem;
`;

const Button = styled.button`
    background-color: #FB5B3B;
    font-size: 20px;
    width: 100%;
    padding: 1rem;
    color: white;
    font-weight:bold;
    border: none;
    transition: background-color .3s ease;
    margin: 0 25px;
    border-radius: 15px;

    &:hover{
        cursor: pointer;
        background-color:#F62D05;
    }
`;

const Error = styled.div`
    background-color: #C70039 ;
    font-size: 20px;
    color: white;
    padding: 1rem;
    width: 44%;
    margin: 15px 25px;
    border-radius: 15px;
    border: none;
    text-align: center;

`;



const Form = ({guardarDatosForm}) => {

    /**
     * Create state 
     */

    const [data, savaData] = useState({
        hourOne: '',
        hourTwo:'',
        type:'car'
    });
    
    const [error ,saveError ] = useState(false) ;

    /**
     * Extraer los valores
     */
     const {hourOne, hourTwo, type} = data;




    /**
     * Create función handle, aca relleno el objeto
     */

    const handleChange = e => {
        // console.log(e.target.value);
        
        savaData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const quoteParkin = e => {
        e.preventDefault();

        if ( hourOne.trim() === '' || hourTwo.trim() === '' || type.trim() === ''){
            saveError(true);
            return; 
        }

        saveError(false);

        // Obtener las horas 

        const hourTotals = receiveHours(hourOne, hourTwo);
        
        const priceFinal = priceMinute(hourOne,hourTwo, type);
       
        guardarDatosForm({
            horasParking : hourTotals,
            precioParking : priceFinal,
            data
        });

    }

    return (  
        <Fragment>
            <form
                onSubmit={quoteParkin}
            >
                {error?<Error>Por favor llene todos los Campos</Error> :null}

                <Time>
                    <Label>Hora Entrada: </Label>
                        <Input
                            type="time"
                            name="hourOne"
                            className="hour"
                            onChange={handleChange}
                        />
                </Time>

                <Time>
                    <Label>Hora Salida: </Label>
                        <Input
                            type="time"
                            name="hourTwo"
                            className="hour"
                            onChange={handleChange}
                        />
                </Time>
                
                <Time>
                    <Label>Tipo de Vehiculo: </Label>
                    <InputRatio
                        type="radio"
                        name="type"
                        value="car"
                        onChange={handleChange}
                        checked={type === "car"}
                        /> Carro

                    <InputRatio
                        type="radio"
                        name="type"
                        value="motorcycle"
                        onChange={handleChange}
                        checked={type === "motorcycle"}
                        /> Motocicleta
                </Time>

                <Button type="submit">Calcular</Button>
            </form>

           
        </Fragment>
    );
}
 
export default Form;
