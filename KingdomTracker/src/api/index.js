import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

const login = async (email, password)=>{
    const response = await api.post('user/login', {body: {email: email, password: password}});

    return response;
};



const apiCalls = {
    login
};

export default apiCalls;