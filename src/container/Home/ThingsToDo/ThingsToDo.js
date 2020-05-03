import React from 'react';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import Container from 'components/UI/Container/Container';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Services from '../../Services/Services'

const ThingsToDo = () => {
    return (
        <Container fluid={true}>
            {/* <SectionTitle
                title={<Heading content="Things To Do" />}
                link={<TextLink link={""} content="" />}
            /> */}
            <Services />
        </Container>
    );
};

export default ThingsToDo;