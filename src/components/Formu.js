import React ,{Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Time = styled.div`
    display:flex;
    margin: 10px 30px;
    align-items: center;
    
`;

const Label = styled.label`
    flex:0 0 100px;
`;

const Input = styled.input`
    display: block;
    width: 30%;
    padding: 1rem;
    border : 2px solid #0f112e;
    border-radius: 20px;
    -webkit-appearance:none;
`;

const InputRatio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #FB5B3B;
    font-size: 20px;
    width: 48%;
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

const Formu = () => {

    /**
     * Create state 
     */

    const [data, savaData] = useState({
        hourOne: '',
        hourTwo:'',
        type:'motorcycle'
    });

    /**
     * Create función handle
     */

    const handleChange = e => {
        console.log(e.target.name);
        
        savaData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    // console.log(data)
    /**
     * Extraer los valores
     */
    const {hourEntry, hourDeparture, type} = data;


    return (  
        <Fragment>
            <form>
                <Time>
                    <Label>Hour Entry: </Label>
                        <Input
                            type="time"
                            name="hourOne"
                            className="hour"
                            onChange={handleChange}
                            // value={hourEntry}
                        />
                </Time>

                <Time>
                    <Label>Hour Departure: </Label>
                        <Input
                            type="time"
                            name="hourTwo"
                            className="hour"
                            onChange={handleChange}
                            // value={hourDeparture}
                            
                        />
                </Time>
                
                <Time>
                    <Label>Type of vehicle</Label>
                    <InputRatio
                        type="radio"
                        name="type"
                        value="car"
                        onChange={handleChange}
                        checked={type === "car"}
                        /> Car

                    <InputRatio
                        type="radio"
                        name="type"
                        value="motorcycle"
                        onChange={handleChange}
                        // value="motorcycle"
                        checked={type === "motorcycle"}
                        /> Motorcycle
                </Time>

                <Button type="button">Quote</Button>
            </form>
        </Fragment>
    );
}
 
export default Formu;
