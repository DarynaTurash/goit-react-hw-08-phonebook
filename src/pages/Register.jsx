import RegisterForm from "components/registerForm/registerForm";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
max-width: 1230px;
padding: 0 15px 0 15px;
margin: 0 auto 0 auto;
`;

const Register = () => {

    return (
        <main>
        <Container>
        <Helmet>
            <title>Registration</title>
        </Helmet>
        <RegisterForm />
        </Container>
        </main>
    )
};

export default Register;