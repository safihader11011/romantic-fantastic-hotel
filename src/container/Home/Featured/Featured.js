import React from 'react';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import Container from 'components/UI/Container/Container';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import {
    LISTING_POSTS_PAGE,
    SINGLE_POST_PAGE,
} from '../../../settings/constant';
import { Row, Col } from 'reactstrap';
import './Featured.css'

const Featured = () => {
    const { data, loading } = useDataApi('/data/packages.json?featured=true', 3);

    return (
        <Container fluid={true}>
            {console.log(data)}
            <SectionTitle
                title={<Heading content="Our Featured Packages" />}
                link={<TextLink link={LISTING_POSTS_PAGE} content="Show all" />}
            />

            <Row className='featured_row'>
                {data.map(d => (
                    <Col sm="12" md="4" lg="4" xs="12" xl="4" className='featured_col'>
                        <div className='featured_div'>
                            <img src={d.image} className='featured_image'></img>
                            <h1 className='featured_title'>{d.title}</h1>
                            <p>{d.content}</p>
                            <div className='featured_separator'></div>
                            <p className='featured_price'>Starting from / <span>{d.price} AED</span><TextLink link={`${SINGLE_POST_PAGE}/${d.slug}`} content="DETAILS" className='featured_link' /></p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Featured;