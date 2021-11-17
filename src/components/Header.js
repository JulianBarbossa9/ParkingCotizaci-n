import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
    background-color: #0f112e;
    padding: 2rem;
    font-weight: bold;
    font-family: 'Prompt', sans-serif;
    color:white;
    border-radius: 30px 30px 0 0;
    
`;

const TextHeader = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px 0;
    font-size: 2rem;
`;

const Header = ({title}) => {
    return ( 
        <ContainerHeader>
            <TextHeader>{title}</TextHeader>
        </ContainerHeader>
     );
}
 
export default Header;