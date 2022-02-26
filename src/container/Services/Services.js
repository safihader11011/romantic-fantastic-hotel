import React, { useState, useEffect, useRef } from 'react';

import useDataApi from 'library/hooks/useDataApi';
import { Row, Col } from 'reactstrap';
import Services1 from '../../assets/images/Services/Services1.PNG'
import Services2 from '../../assets/images/Services/Services2.PNG'
import Services3 from '../../assets/images/Services/Services3.PNG'
import Services4 from '../../assets/images/Services/Services4.PNG'

import './Services.css'

const Services = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const { data, loading } = useDataApi('/data/services.json');

    const fileInput = useRef(null);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    useEffect(() => {
        if (selectedFiles) {
            let formdata = new FormData();
            formdata.append('images', selectedFiles);
            console.log(selectedFiles)
        }
    }, [selectedFiles]);

    const selectFileHandler = event => {
        setSelectedFiles(event.target.files);
    }

    const FileUploadHandler = () => {

    }

    return (
        <div className="ServicesContainer">
            <img className="ServicesImages" src={Services1} />
            <img className="ServicesImages" src={Services2} />
            <img className="ServicesImages" src={Services3} />
            <img className="ServicesImages" src={Services4} />
            {/* <div>
                <input style={{ display: 'none' }}
                    type="file"
                    onChange={selectFileHandler}
                    multiple="multiple"
                    ref={fileInput}
                />
                <botton onClick={() => fileInput.current.click()}>Pick File</botton>
                <button onClick={FileUploadHandler}>Upload</button>
                {(selectedFiles)?
                <img src={URL.createObjectURL(selectedFiles[0])} alt="selectedfile"/>
                :
                null
                }
            </div> */}
        </div>
    );
};

export default Services;