import { Formik } from 'formik';
import { Form, ErrorMessage, FormField, FieldInput, SubmitButton } from '../contactForm/contactForm.styled';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Section } from './loginForm.styled';


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(7, 'Password should contain minimum 7 symbols')
        .matches(/\d/, "Your password should contain minimum one digit")
        .required('Paswword is required')
});

const LoginForm = () => {
    const dispatch = useDispatch();


    return (
        <Section>
        <Formik initialValues={{ 
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                
                onSubmit={(values, action) => {
                    dispatch(logIn(values)).unwrap().then(response => response.data).catch(error => alert("'Please, check your password or login because no such user was found'"));
                    action.resetForm();
                }}>
        <Form>
        <FormField>
        Email
        <FieldInput type="email" name="email" placeholder="Enter your email" />
        <ErrorMessage name="email" component="div" />
        </FormField>
        <FormField>
        Password
        <FieldInput type="password" name="password" placeholder="Min 7 symbols and 1 digit" />
        <ErrorMessage name="password" component="div" />
        </FormField>
        <SubmitButton type="submit">Log in</SubmitButton>
        </Form>
    </Formik>
    </Section>
    );
};

export default LoginForm;