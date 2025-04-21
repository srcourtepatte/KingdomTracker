import axios from "axios";

const api = axios.create({
    baseURL: 'https://kingdomtracker.onrender.com/',
            headers: {
            origin: "https://kingdom-tracker.vercel.app/",
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
        url: 'kingdom/createKingdom',
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
        url: 'kingdom/getuserkingdoms',
        method: 'get',
        withCredentials: true,
    });

    return response;
};

const getKingdomSheet = async (id)=>{
    const response = await api.request({
        url: `kingdom/kingdomSheet/${id}`,
        method: 'get',
        withCredentials: true,
    });


    return response;
};

//call to get leader roles
const getLeaders = async(id)=>{
    const response = await api.request({
        url: `kingdom/leaders/${id}`,
        method: 'get',
        withCredentials: true,
    });

    return response;

};

const updateLeaders = async(id, body) =>{
    console.log(id);
    console.log(body);
    const response = await api.request({
        url: `kingdom/leaders/update/${id}`,
        method: 'post',
        data: {
            id: body[0].kingdom_id,
            leaderData:
            [
                {
                    role: body[0].role_id,
                    name: body[0].leader_name,
                    invested: body[0].invested
                },
                {
                    role: body[1].role_id,
                    name: body[1].leader_name,
                    invested: body[1].invested
                },
                {
                    role: body[2].role_id,
                    name: body[2].leader_name,
                    invested: body[2].invested
                },
                {
                    role: body[3].role_id,
                    name: body[3].leader_name,
                    invested: body[3].invested
                },
                {
                    role: body[4].role_id,
                    name: body[4].leader_name,
                    invested: body[4].invested
                },
                {
                    role: body[5].role_id,
                    name: body[5].leader_name,
                    invested: body[5].invested
                },
                {
                    role: body[6].role_id,
                    name: body[6].leader_name,
                    invested: body[6].invested
                },
                {
                    role: body[7].role_id,
                    name: body[7].leader_name,
                    invested: body[7].invested
                },
            ]
        },
        withCredentials: true,
    });
    
    return response;
}

const getKingdomFeats = async(id)=>{
    const response = await api.request({
        url : `features/kingdomfeats/${id}`,
        method: 'get',
        withCredentials: true,
    });

    return response;
};

const addKingdomFeat = async(id, feat)=>{
    const response = await api.request({
        url: `features/${id}/addFeat`,
        method: 'post',
        data: {
            feat: feat
        },
        withCredentials: true,
    });

    return response;
}

const getAllFeats = async() =>{
    const response = await api.request({
        url: `features/allfeats`,
        method: 'get',
        withCredentials: true,
    });

    return response;
}

const updateKingdomResources = async(id, food, lumber, luxuries, ore, stone)=>{

    const response = await api.request({
        url: `kingdom/resources/update/${id}`,
        method: 'post',
        data: {
            food: food,
            lumber: lumber,
            luxuries: luxuries,
            ore: ore,
            stone: stone
        },
        withCredentials: true,
    });

    return response;
}

const updateKingdomRuin = async(id, ruindata)=>{
    console.log(ruindata.data[0]);
    
    const response = await api.request({
        url: `kingdom/ruin/update/${id}`,
        method: 'post',
        data:{
            corruption: {
                threshold: ruindata.data[0].threshold,
                score: ruindata.data[0].ruin_score,
                penalty: ruindata.data[0].penalty
            },
            crime: {
                threshold: ruindata.data[1].threshold,
                score: ruindata.data[1].ruin_score,
                penalty: ruindata.data[1].penalty
            },
            decay: {
                threshold: ruindata.data[2].threshold,
                score: ruindata.data[2].ruin_score,
                penalty: ruindata.data[2].penalty
            },
            strife: {
                threshold: ruindata.data[3].threshold,
                score: ruindata.data[3].ruin_score,
                penalty: ruindata.data[3].penalty
            }
        },
        withCredentials: true,
    });

    return response;
}

const updateKingdomScores = (id, data)=>{
    console.log(data);
    
    const response = api.request({
        url: `kingdom/abilities/update/${id}`,
        method: 'post',
        data: {
            culture: {
                score: data[0].ability_score,
                modifier: data[0].ability_modifier
            },
            econ: {
                score: data[1].ability_score,
                modifier: data[1].ability_modifier
            },
            loyalty: {
                score: data[2].ability_score,
                modifier: data[2].ability_modifier
            },
            stability: {
                score: data[3].ability_score,
                modifier: data[3].ability_modifier
            },
        },
        withCredentials: true,
    });

    return response;
}

const updateKingdomSkill = async (id, data)=>{
    console.log(data);
    
    const response = api.request({
        url: `kingdom/skills/update/${id}`,
        method: 'post',
        data: {
            skill_id: data.skillID,
            training: data.trainingVal
        },
        withCredentials: true,
    });

    return data;
}

const apiCalls = {
    login,
    register,
    getHeartlands,
    getCharters,
    getGovernments,
    getUserKingdoms,
    newKingdom,
    getKingdomSheet,
    getLeaders,
    updateLeaders,
    getKingdomFeats,
    addKingdomFeat,
    getAllFeats,
    updateKingdomResources,
    updateKingdomRuin,
    updateKingdomScores,
    updateKingdomSkill,
};

export default apiCalls;
