import { Formik } from 'formik';
import { Form, ErrorMessage, FormField, FieldInput, SubmitButton } from '../contactForm/contactForm.styled';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Section } from 'components/loginForm/loginForm.styled';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(7, 'Password should contain minimum 7 symbols')
        .matches(/\d/, "Your password should contain minimum one digit")
        .required('Paswword is required')
});

const RegisterForm = () => {
    const dispatch = useDispatch();

    return (
        <Section>
        <Formik initialValues={{
                    name: '', 
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                
                onSubmit={(values, action) => {
                    dispatch(register(values));
                }}>
        <Form>
        <FormField>
        User name
        <FieldInput type="text" name="name" placeholder="Enter your name"  />
        <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
        Email
        <FieldInput type="email" name="email" placeholder="Enter your email" />
        <ErrorMessage name="number" component="div" />
        </FormField>
        <FormField>
        Password
        <FieldInput type="password" name="password" placeholder="Min 7 symbols and 1 digit" />
        <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">Register</SubmitButton>
        </Form>
    </Formik>
    </Section>
    );
};

export default RegisterForm;