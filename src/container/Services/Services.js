import React, { useState } from 'react';

import useDataApi from 'library/hooks/useDataApi';
import { Row, Col } from 'reactstrap';
import Services1 from '../../assets/images/Services/Services1.PNG'
import Services2 from '../../assets/images/Services/Services2.PNG'
import Services3 from '../../assets/images/Services/Services3.PNG'
import Services4 from '../../assets/images/Services/Services4.PNG'

import './Services.css'

const Services = () => {
    const [index, setIndex] = useState(0);
    const { data, loading } = useDataApi('/data/services.json');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="ServicesContainer">
            <img className="ServicesImages" src={Services1} />
            <img className="ServicesImages" src={Services2} />
            <img className="ServicesImages" src={Services3} />
            <img className="ServicesImages" src={Services4} />
        </div>
    );
};

export default Services;