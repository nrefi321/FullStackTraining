import axios, { AxiosResponse } from 'axios';
import {UserResponse, LoginData, RegisterResponse, RegisterData} from '@/types/user';

import { API_CONFIG , API_LOCAL_CONFIG} from '@/constants/config';


const api = axios.create({
    baseURL: API_LOCAL_CONFIG.BASE_URL,
    timeout: API_LOCAL_CONFIG.TIMEOUT,
});

const authLogin = (data: LoginData) => { 
    return api.post<UserResponse>('/users/login', data,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }) 
};

const authRegister = (data: RegisterData) => { 
    return api.post<RegisterResponse>('/users/register', data,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }) 
};


export { authLogin , authRegister };