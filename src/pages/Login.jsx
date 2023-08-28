import LoginForm from "components/loginForm/loginForm";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
max-width: 1230px;
padding: 0 15px 0 15px;
margin: 0 auto 0 auto;
`;

const Login = () => {
    return (
       <main>
        <Container>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm />
        </Container>
       </main>
    );
};

export default Login;