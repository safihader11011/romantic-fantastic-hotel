import React, { useContext, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import RenderSignInForm from 'components/SignIn/RenderSignInForm';
import * as Yup from 'yup';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { loginUser } from '../../services/user';

const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
};

const getLoginValidationSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            // .email('Invalid email')
            .required('Email is Required!'),
        password: Yup.string()
            // .min(6, 'Password has to be longer than 6 characters!')
            // .max(20, 'Too Long!')
            .required('Password is required!'),
    });
};

export default (props) => {
    const { signIn, loggedIn } = useContext(AuthContext);

    if (loggedIn) return <Redirect to={{ pathname: '/' }} />;

    const handleSubmit = async formProps => {
        props.onChangeLoader(true);
        let res = await loginUser(formProps.email, formProps.password);
        if (!res.error) {
            signIn({ ...res, user: formProps.email });
            props.onChangeLoader(false);
        } else {
            props.onChangeLoader(false);
            props.onChangeError(true);
            props.onChangeErrorStatus(res.message);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={
                props => (
                    <RenderSignInForm {...props}
                        forgetPasswordLink={FORGET_PASSWORD_PAGE}
                    />
                )
            }
            validationSchema={getLoginValidationSchema}
        />
    );
};