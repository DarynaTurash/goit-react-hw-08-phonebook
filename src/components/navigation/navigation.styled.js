import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavigationStyled = styled.nav`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
`;

export const NavLink = styled(Link)`
text-decoration: none;
color: black;
padding: 20px 0 20px 0;
transition: color 250ms cubic-bezier(.17,.67,.83,.67);

&:hover,
&:focus {
    color: #317EC6;
}

&:active {
    color: #A2C2DF;
}



`;

