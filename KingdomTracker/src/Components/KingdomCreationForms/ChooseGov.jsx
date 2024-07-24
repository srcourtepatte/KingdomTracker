import { useEffect, useState, useRef } from "react";
import apiCalls from "../../api";

const ChooseGov = ()=>{

    const [governments, setGovernments] = useState([]);
    const calledAPI = useRef(false);

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            apiCalls.getGovernments().then((result)=>{
                console.log(result.data.data);
                setGovernments(result.data.data);
            });
        };
       
    }, []);

    return (
        <div className="aspectGrid">
        {governments.map((government) =>(
            <div className="aspectCard">
                <h1>{government.government_name}</h1>
                <p>{government.government_description} </p>
                <p>Ability Boosts: {government.ab_1}, {government.ab_2}, {government.ab_3}</p>
                <p> Skill Boosts: {government.sp_1}, {government.sp_2}</p>
                <p>Bonus Feat: {government.bonus_feat}</p>
            </div>
        ))}
            
        </div>
    );
};

export default ChooseGov;