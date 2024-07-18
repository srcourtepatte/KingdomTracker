import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
            headers: {
            origin: "http://localhost:5173",
        },
    
});

const login = async (email, password)=>{
    const response = api.request({
        url: '/user/login',
        method: 'post',
        data: {
            email: email,
            password : password
        },
        withCredentials: true,
    });
        
    // const response = await api.post('user/login', {body: {email: email, password: password}, credentials: 'same-origin'} );

    return response;
};

const register = async (username, email, password)=>{
    const response = api.request({
        url: '/user/register',
        method: 'post', 
        data: {
            username: username,
            email: email,
            password: password
        },
        withCredentials: true,
    });

    // return api.post('user/register', { body: {username: username, email: email, password: password}, withCredentials: true});

    return response;
};



const apiCalls = {
    login,
    register
};

export default apiCalls;
