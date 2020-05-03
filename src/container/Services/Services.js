import React, { useState } from 'react';

import useDataApi from 'library/hooks/useDataApi';
import { Row, Col } from 'reactstrap';

import './Services.css'

const Services = () => {
    const [index, setIndex] = useState(0);
    const { data, loading } = useDataApi('/data/services.json');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Row>
            <Col sm="12" md="12" lg="12" xs="12" xl="12">

            </Col>
        </Row>
    );
};

export default Services;