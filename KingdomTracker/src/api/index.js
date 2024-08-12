import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
            headers: {
            origin: "http://localhost:5173",
        },
    
});

// API calls for login and registration

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

    return response;
};

//API calls for Kingdom Aspects

const getHeartlands = async()=>{
    const response = api.request({
        url: '/aspects/list_heartlands',
        method: 'get',
        withCredentials: true,
    });

    return response;
};

const getCharters = async ()=>{
    const response = api.request({
        url: '/aspects/list_charters',
        method: 'get',
        withCredentials: true,
    });

    return response;
};

const getGovernments = async ()=>{
    const response = api.request({
        url: 'aspects/list_governments',
        method: 'get',
        withCredentials: true,
    });

    return response;
};

// calls for Kingdom details

const newKingdom = async (name, heartland, charter, gov, level, free1, free2 )=>{
    console.log(name, heartland, charter, gov, level);
    const response = api.request({
        url: 'kingdoms/createKingdom',
        method: 'post',
        data: {
            name: name,
            heartland: heartland,
            charter: charter,
            gov: gov,
            level: level,
            free1: free1,
            free2: free2
        },
        withCredentials: true,
    });

    return response;
};

const getUserKingdoms = async ()=>{
    const response = api.request({
        url: 'kingdoms/getuserkingdoms',
        method: 'get',
        withCredentials: true,
    });

    return response;
};

const getKingdomSheet = async (id)=>{
    const response = await api.request({
        url: `kingdoms/kingdomSheet/${id}`,
        method: 'get',
        withCredentials: true,
    });


    return response;
};

//call to get leader roles
const getLeaders = async(id)=>{
    const response = await api.request({
        url: `kingdoms/leaders/${id}`,
        method: 'get',
        withCredentials: true,
    });

    return response;

};

const apiCalls = {
    login,
    register,
    getHeartlands,
    getCharters,
    getGovernments,
    getUserKingdoms,
    newKingdom,
    getKingdomSheet,
    getLeaders
};

export default apiCalls;
