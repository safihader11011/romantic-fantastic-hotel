import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Divider from 'components/UI/Antd/Divider/Divider';
import Button from 'components/UI/Antd/Button/Button';
import Logo from 'components/UI/Logo/Logo';
import SignInForm from './SignInForm';
import { REGISTRATION_PAGE } from 'settings/constant';
import Loader from 'react-loader-spinner';
import { Modal } from 'react-bootstrap';

import SignInWrapper, {
  Title,
  TitleInfo,
  Text,
  SignInFormWrapper,
  SignInBannerWrapper,
} from './SignIn.style';

import signInImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo.png';

const SignIn = () => {
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
          <SignInWrapper>
            <SignInFormWrapper>
              <Logo withLink linkTo="/" src={tripFinder} title="" />
              <Title style={{ textAlign: 'center' }}>Welcome Back</Title>
              <TitleInfo style={{ textAlign: 'center' }}>Please log into your account</TitleInfo>
              <SignInForm
                onChangeLoader={v => { setLoading(v) }}
                onChangeError={v => { setError(v) }}
                onChangeErrorStatus={v => { setErrorStatus(v) }}
              />
              <Text style={{ marginTop: '30px' }}>
                Don't Have an Account?{' '}
                <Link to={REGISTRATION_PAGE}>Registration</Link>
              </Text>
            </SignInFormWrapper>

            <SignInBannerWrapper>
              <div
                style={{
                  backgroundImage: `url(${signInImage})`,
                  backgroundPosition: 'center center',
                  height: '100vh',
                  backgroundSize: 'cover',
                }}
              />
            </SignInBannerWrapper>
          </SignInWrapper>

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
};

export default SignIn;
