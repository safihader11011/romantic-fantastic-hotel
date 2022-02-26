import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Divider from 'components/UI/Antd/Divider/Divider';
import Button from 'components/UI/Antd/Button/Button';
import Logo from 'components/UI/Logo/Logo';
import SignUpForm from './SignUpForm';
import signUpImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo.png';
import Loader from 'react-loader-spinner';
import { Modal } from 'react-bootstrap';

import SignUpWrapper, {
  Title,
  TitleInfo,
  Text,
  SignUpFormWrapper,
  SignUpBannerWrapper,
} from './SignUp.style';

import { LOGIN_PAGE } from 'settings/constant';

export default function SignUp() {
  const [state, setState] = useState({
    facebookBtnLoading: false,
    githubBtnLoading: false,
    firebaseBtnLoading: false,
    googleBtnLoading: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const facebookAuthAction = () => {
    setState({ ...state, facebookBtnLoading: true });
    setTimeout(() => {
      setState({ ...state, facebookBtnLoading: false });
    }, 600);
  };

  const githubAuthAction = () => {
    setState({ ...state, githubBtnLoading: true });
    setTimeout(() => {
      setState({ ...state, githubBtnLoading: false });
    }, 600);
  };

  const firebaseAuthAction = () => {
    setState({ ...state, firebaseBtnLoading: true });
    setTimeout(() => {
      setState({ ...state, firebaseBtnLoading: false });
    }, 600);
  };

  const googleAuthAction = () => {
    setState({ ...state, googleBtnLoading: true });
    setTimeout(() => {
      setState({ ...state, googleBtnLoading: false });
    }, 600);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
        <React.Fragment>
          <SignUpWrapper>
            <SignUpFormWrapper>
              <Logo withLink linkTo="/" src={tripFinder} title="" />

              <Title style={{ textAlign: 'center' }}>Welcome To Romantic Fantastic</Title>
              <TitleInfo style={{ textAlign: 'center' }}>Please Register for your account</TitleInfo>
              <SignUpForm
                onChangeLoader={v => { setLoading(v) }}
                onChangeError={v => { setError(v) }}
                onChangeErrorStatus={v => { setErrorStatus(v) }}
              />
              {/* <Divider>Or Register Up With </Divider> */}
              {/* <Row gutter={16}>
          <Col span={12}>
            <Button
              loading={state.facebookBtnLoading}
              className="facebook-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={facebookAuthAction}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.googleBtnLoading}
              className="google-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={googleAuthAction}
            >
              Google+
            </Button>
          </Col>
        </Row> */}
              <Text style={{ marginTop: '30px' }}>
                Already Have an Account! <Link to={LOGIN_PAGE}>Login</Link>
              </Text>
            </SignUpFormWrapper>

            <SignUpBannerWrapper>
              <div
                style={{
                  backgroundImage: `url(${signUpImage})`,
                  backgroundPosition: 'center center',
                  height: '100vh',
                  backgroundSize: 'cover',
                }}
              />
            </SignUpBannerWrapper>
          </SignUpWrapper>

          <Modal show={error}
            onHide={() => setError(false)} >
            <Modal.Header closeButton >
              <Modal.Title style={{ color: 'red' }}> Error </Modal.Title>
            </Modal.Header>
            <Modal.Body >
              {errorStatus}
            </Modal.Body>
          </Modal>
        </React.Fragment>
      }
    </React.Fragment>
  );
}
