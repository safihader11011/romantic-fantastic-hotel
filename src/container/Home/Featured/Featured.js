import React, { useState, useEffect } from 'react';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import Container from 'components/UI/Container/Container';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { getPackages } from '../../../services/packages';
import Loader from 'react-loader-spinner';

import {
    LISTING_POSTS_PAGE,
    SINGLE_PACKAGE_PAGE,
} from '../../../settings/constant';
import { Row, Col } from 'reactstrap';
import './Featured.css'

const Featured = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    let fetchPackages = async () => {
        let data = await getPackages();
        if (data.results) {
            var featuredData = data.results.filter(function (d) { return d.featured });
            if (featuredData.length > 3) {
                setData(featuredData.slice(0, 3))
            } else {
                setData(featuredData);
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPackages()
    }, [])

    return (
        <React.Fragment>
            {(loading) ?
                <div className="loader" >
                    <Loader
                        type="ThreeDots"
                        color="#CE181E"
                        height={100}
                        width={100}
                    // timeout={3000} //3 secs
                    />
                </div>
                :
                <Container fluid={true}>
                    <SectionTitle
                        title={<Heading content="Our Featured Packages" />}
                        link={<TextLink link={LISTING_POSTS_PAGE} content="Show all" />}
                    />

                    <Row className='featured_row'>
                        {data.map(d => (
                            <Col sm="12" md="4" lg="4" xs="12" xl="4" className='featured_col'>
                                <div className='featured_div position-relative h-100'>
                                    <img src={d.image} className='featured_image'></img>
                                    <h1 className='featured_title'>{d.title}</h1>
                                    <p>{d.content}</p>
                                    <div className=" position-absolute w-100" style={{ bottom: '0' }}>
                                        <div className='featured_separator'></div>
                                        <p className='featured_price'>Starting from / <span>{d.price}</span><TextLink link={`${SINGLE_PACKAGE_PAGE}/${d.id}`} content="DETAILS" className='featured_link' /></p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            }
        </React.Fragment>
    );
};

export default Featured;