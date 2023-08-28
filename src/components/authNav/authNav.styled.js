import styled from 'styled-components';
import { Link } from "react-router-dom";

export const AuthLink = styled(Link)`
text-decoration: none;
color: black;
transition: color 250ms cubic-bezier(.17,.67,.83,.67);
padding: 20px 0 20px 0;

&:hover,
&:focus {
    color: #317EC6;
}
`;

export const Wrapper = styled.div`
display: flex;
gap: 30px;
`;

