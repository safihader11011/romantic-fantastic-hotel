import React from 'react';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import Container from 'components/UI/Container/Container';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import WelcomeImage from '../../../assets/images/welcome_image.PNG'
import './Welcome.css'

const Welcome = () => {
    return (
        <Container fluid={true}>
            {/* <SectionTitle
                title={<Heading content="Things To Do" />}
                link={<TextLink link={""} content="" />}
            /> */}

            <Row id="Services">
                <Col sm="12" md="6" lg="6" xs="12" xl="6">
                    <img src={WelcomeImage} />
                </Col>
                <Col sm="12" md="6" lg="6" xs="12" xl="6">
                    <h1 className="welcome_heading">Welcome to our Services</h1>

                    <p className="welcome_p1">Set the pase of your romantic weekend getaway, whether you want to get your pulse racing in Aquaventure, or soak up the serenity of the Lost Chambers Aquarium</p>

                    <p className="welcome_p2">Indulge yourself with an unforgettable romantic getaway with us, The Palm, where the perfect couples retreat awaits. Why not complete your dream date with the ultimate package with us? Spend the day lounging in a private cabana at our romantic day service plan just for you, or treat yourselves to a luxuirious treatment in the spa's exclusive couple's suite.</p>

                    <Link to="/things-to-do"><button className="welcome_button">KNOW &nbsp;MORE</button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;