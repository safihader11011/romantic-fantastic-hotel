import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import ForgetPassWordForm from './ForgetPassWordForm';
import ForgerPassWordImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo.png';
import ForgetPassWordWrapper, {
  Title,
  TitleInfo,
  ForgetPassWordFormWrapper,
  ForgetPassWordBannerWrapper,
} from './ForgetPassWord.style';

export default function ForgetPassWord() {
  return (
    <ForgetPassWordWrapper>
      <ForgetPassWordFormWrapper>
        <Logo withLink linkTo="/" src={tripFinder} title="" />
        <Title style={{ textAlign: 'center' }}>Welcome Back</Title>
        <TitleInfo style={{ textAlign: 'center' }}>Enter your email to recover your account</TitleInfo>
        <ForgetPassWordForm />
      </ForgetPassWordFormWrapper>
      <ForgetPassWordBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${ForgerPassWordImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </ForgetPassWordBannerWrapper>
    </ForgetPassWordWrapper>
  );
}
