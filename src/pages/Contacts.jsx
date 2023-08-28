import { React, useEffect } from 'react';
import { ContactList } from '../components/contactList/contactList';
import { ContactForm } from '../components/contactForm/contactForm';
import { Filter } from '../components/filter/filter';
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Loader } from '../components/loader/loader';
import styled from 'styled-components';

const Container = styled.div`
max-width: 1230px;
padding: 0 15px 0 15px;
margin: 0 auto 0 auto;
`;

const Contacts = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

return (
    <main>
    <Container>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    {isLoading && <Loader />}
    {items && !isLoading && <ContactList />}
    {error && <p>Error</p>}
    </Container>
    </main>
    );
};

export default Contacts;