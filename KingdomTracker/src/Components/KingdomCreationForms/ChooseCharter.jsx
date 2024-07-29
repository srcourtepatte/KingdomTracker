import { useEffect, useState } from "react";
import apiCalls from "../../api";

const ChooseCharter = ()=>{

    const [charters, setCharters] = useState([]);
    const [currentCharter, setCurrentCharter] = useState([]);

    useEffect(()=>{
        apiCalls.getCharters().then((result)=>{
            console.log(result.data.data);
            setCharters(result.data.data);
        });
    }, []);

    const setSelected = (req)=>{

        if(currentCharter.name != null){
            
            const selection = document.getElementById(currentCharter.name);
            selection.classList.remove("selected");

        }

        const selection = document.getElementById(req.name);
        selection.classList.add("selected");
        setCurrentCharter(req);
        sessionStorage.setItem("Charter", req.id);
    };

    return (
        
        <div className="aspectGrid">
        {charters.map((charter) =>(
            <div className="aspectCard" id={charter.charter_name} onClick={(e)=>{setSelected({name: charter.charter_name, id: charter.charter_id})}}>
            <h1>{charter.charter_name}</h1>
            <p>{charter.charter_description}</p>
            <p>Ability Boosts: {charter.ability_Boost_1}, {charter.ability_Boost_2}</p>
            <p>Ability Flaw: {charter.ability_Flaw}</p>
            </div>
          
        ))}
    </div>
    );

};

export default ChooseCharter;

