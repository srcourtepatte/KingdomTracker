
import { useNavigate } from "react-router-dom";
import { KingdomCard } from "../Components";

import { useState } from "react";

const UserDash = ()=>{
    
    const [kingdomList, setKingdomList] = useState([]);
    const navigate = useNavigate();

    const testList = [  {name: "kingdom1", lvl: "1"}, 
                        {name: "kingdom2", lvl: "1"}, 
                        {name: "kingdom3", lvl: "1"}];
   
    const handleNewKingdom = ()=>{
        navigate("/newKingdom");
        };



    return (
        <>
            <div className="statForm">
                <p className="nameLabel">Kingdom List: </p>
                {testList.map((kingdom) => (
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