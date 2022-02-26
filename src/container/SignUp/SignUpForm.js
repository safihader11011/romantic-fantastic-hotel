import React, { useContext, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import RenderSignUpForm from 'components/SignUp/RenderSignUpForm';
import { AuthContext } from 'context/AuthProvider';
import { registerUser } from '../../services/user';

const initialValues = {
  email: '',
  // username: '',
  password: '',
  confirmPassword: '',
  termsAndConditions: false,
  rememberMe: false,
};

const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    // username: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Username is Required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords are not the same!')
      .required('Password confirmation is required'),
    termsAndConditions: Yup.bool()
      .test(
        'consent',
        'You have to agree with our Terms and Conditions!',
        value => value === true
      )
      .required('You have to agree with our Terms and Conditions!'),
  });
};

const SignUpComp = (props) => {
  const { signUp, loggedIn } = useContext(AuthContext);

  if (loggedIn) return <Redirect to={{ pathname: '/' }} />;

  const handleSubmit = async formProps => {
    props.onChangeLoader(true);
    let res = await registerUser(formProps.email, formProps.password);
    if (!res.error) {
      props.history.push('/login')
    }
    else {
      props.onChangeLoader(false);
      props.onChangeError(true);
      props.onChangeErrorStatus(res.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getRegisterValidationSchema}
      render={RenderSignUpForm}
    />
  );
};

export default withRouter(SignUpComp);
