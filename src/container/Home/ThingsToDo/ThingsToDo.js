import React, { useState } from 'react';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import Container from 'components/UI/Container/Container';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { Carousel } from 'react-bootstrap'

import useDataApi from 'library/hooks/useDataApi';

import './ThingsToDo.css'

const ThingsToDo = () => {
    const [index, setIndex] = useState(0);
    const { data, loading } = useDataApi('/data/services.json');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid={true}>
            {/* <SectionTitle
                title={<Heading content="Things To Do" />}
                link={<TextLink link={""} content="" />}
            /> */}
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={false}>
                {data.map(d => (
                    <Carousel.Item className="c-item" style={{ backgroundImage: "url(" + (d.url) + ")" }}>
                        <div className="c-item-cover"></div>
                        <h1>{d.title}</h1>
                        <p>{d.description}</p>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default ThingsToDo;