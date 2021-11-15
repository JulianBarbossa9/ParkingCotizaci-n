import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
    background-color: #0f112e;
    padding: 10px;
    font-weight: bold;
    font-family: 'Prompt', sans-serif;
    color:white;
    
`;

const TextHeader = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px 0;
    font-size: 1.5rem;
`;

const Header = ({title}) => {
    return ( 
        <ContainerHeader>
            <TextHeader>{title}</TextHeader>
        </ContainerHeader>
     );
}
 
export default Header;