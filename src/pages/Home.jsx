import { BiSolidBookBookmark } from "react-icons/bi";
import { IconContext } from "react-icons";
import styled from 'styled-components';

const Title = styled.h1`
font-size: 140px;
color: white;
margin: 0;
margin: 0 auto 0 auto;
text-align: center;
`;

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #A2C2DF;
padding: 180px 0 180px 0;
`;

const Container = styled.div`
max-width: 1230px;
padding: 0 15px 0 15px;
margin: 0 auto 0 auto;
`;

const Home = () => {
    return (
        <main>
            <Section>
                <Container>
                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "100px", verticalAlign: 'middle' }}>
                <Title><BiSolidBookBookmark /> Phonebook app</Title>
                </IconContext.Provider>
                </Container>
            </Section>
        </main>
    );
};

export default Home;