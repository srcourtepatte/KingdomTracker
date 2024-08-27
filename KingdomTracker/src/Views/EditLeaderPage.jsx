import { useEffect, useRef, useState } from "react"
import apiCalls from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { Leaders } from "../Components";


const editLeaderPage = ()=>{
    const [leaderData, setLeaderData] = useState([]);
    const { id } = useParams(); 

    const apiCalled = useRef(false);

    useEffect(()=>{
        if(!apiCalled.current){
            apiCalled.current = true;
            apiCalls.getLeaders(id).then((result)=>{
            console.log(result);
            setLeaderData(result.data.data);
        });
        }

    }, []);

    return(
        <div>
           <Leaders data={leaderData} formType="edit" /> 
        </div>
        
    );
};

export default editLeaderPage;