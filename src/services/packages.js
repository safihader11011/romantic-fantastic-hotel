import { instance } from './axios';
// import _ from 'lodash';

export let getPackagesCount = async () => {
    try {
        let response = await instance.get('/api/packageCount/');
        return response.data;
    } catch (err) {
        return { ...err, error: true }
    }
}

export let getPackageTypes = async () => {
    try {
        let response = await instance.get('/api/package_types/');
        return response.data;
    } catch (err) {
        return { ...err, error: true }
    }
}

export let getPackages = async (city, filter = undefined) => {
    try {
        let response = await instance.get('/api/packages/?' + ((city !== undefined) ? `city=${city}&` : "") + ((filter !== undefined) ? `type=${filter}` : ""));
        return response.data;
    } catch (err) {
        return { ...err, error: true }
    }
}

export let getSinglePackages = async (id) => {
    try {
        let response = await instance.get('/api/packages/' + id + '/');
        return response.data;
    } catch (err) {
        return { ...err, error: true }
    }
}