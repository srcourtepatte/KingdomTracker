import { useEffect, useRef } from "react"
import apiCalls from "../../api"
import { useParams } from "react-router-dom";


const editLeaders = ()=>{

    const { id } = useParams(); 

    const apiCalled = useRef(false);

    useEffect(()=>{
        if(!apiCalled.current){
            apiCalled.current = true;
            apiCalls.getLeaders(id).then((result)=>{
            console.log(result);
        });
        }

    }, []);


    return(
        <h1>leaders</h1>
    );
};

export default editLeaders;