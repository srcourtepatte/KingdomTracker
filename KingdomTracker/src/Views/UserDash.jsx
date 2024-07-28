
import { useNavigate } from "react-router-dom";
import { KingdomCard } from "../Components";

import { useEffect, useRef, useState } from "react";
import apiCalls from "../api";

const UserDash = ()=>{
    
    const [kingdomList, setKingdomList] = useState([]);
    const navigate = useNavigate();
    const calledAPI = useRef(false);

    useEffect(()=>{
        if(!calledAPI.current)
        {
            calledAPI.current = true;
            apiCalls.getUserKingdoms().then((result)=>{
                console.log(result.data.data);
                setKingdomList(result.data.data);
            });
        }
    });
   
    const handleNewKingdom = ()=>{
        navigate('/newKingdom');
    };

    return (
        <>
            <div className="statForm">
                <p className="nameLabel">Kingdom List: </p>
                {kingdomList.map((kingdom) => (
                    <>
                    <KingdomCard kingdom={kingdom} />
                    </>
                ))}

                <input type="button" value="+ New Kingdom" className="goodButton" onClick={handleNewKingdom}/>
            </div>
        </>
    );
};

export default UserDash;