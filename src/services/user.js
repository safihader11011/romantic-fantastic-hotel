import { instance } from './axios';
import _ from 'lodash';

export let registerUser = async(email, password) => {
    try {
        let response = await instance.post('/user/users/', {
            email: email,
            password: password
        });
        return response.data;
    } catch (err) {
        console.log(err.response)
        if ((_.get(err, 'response.data.email[0]') === 'user with this email address already exists.')) {
            return { message: err.response.data.email[0], error: true };
        } else {
            return { message: "Network Error", error: true };
        }
    }
}

export let loginUser = async(email, password) => {
    try {
        let response = await instance.post('/user/token/', {
            email: email,
            password: password
        });
        return response.data;
    } catch (err) {
        if ((_.get(err, 'response.statusText') === 'Unauthorized')) {
            return { message: 'Invalid email/password', error: true };
        } else {
            return { message: "Network Error", error: true };
        }
    }
}