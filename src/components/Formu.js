import React ,{Fragment} from 'react';
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
    /* -webkit-appearance:none; */
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
    return (  
        <Fragment>
            <form>
                <Time>
                    <Label>Entry Time: </Label>
                    <Input
                        type="time"
                        name="hourEntry"
                        className="hour"
                        value="entry"
                    />
                </Time>
                <Time>
                    <Label>Departure Time: </Label>
                    <Input
                        type="time"
                        name="hourDeparture"
                        className="hour"
                        value="entryDeparture"
                    />
                </Time>
                
                <Time>
                    <Label>Type of vehicle</Label>
                    <InputRatio
                        type="radio"
                        name="type"
                        value="car"
                    /> Car

                    <InputRatio
                        type="radio"
                        name="type"
                        value="motorcycle"
                    /> Motorcycle
                </Time>

                <Button type="button">Quote</Button>
            </form>
        </Fragment>
    );
}
 
export default Formu;
