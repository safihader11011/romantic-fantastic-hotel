import axios from 'axios';
let base_url = "http://asadjivani.pythonanywhere.com"

export const instance = axios.create({
    baseURL: base_url,
    headers: { 'Content-Type': 'application/json' }
});

export const baseUrl = "http://asadjivani.pythonanywhere.com";