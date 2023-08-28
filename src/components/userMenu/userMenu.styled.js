import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap: 30px;
align-items: center;
`;

export const LogOutButton = styled.button`
width: 100px;
padding: 0;
padding: 10px 10px 10px 10px;
color: #A2C2DF;
border: 1px solid #A2C2DF;
border-radius: 7px;
font-weight: 600;
background-color: transparent;
transition: border-color 250ms cubic-bezier(.17,.67,.83,.67);


&:hover,
&:focus {
    border-color: #317EC6;
    color: #317EC6;
}

`;
