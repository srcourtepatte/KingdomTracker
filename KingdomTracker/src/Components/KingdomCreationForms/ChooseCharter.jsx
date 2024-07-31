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
        
        switch (req.name) {
            case "Conquest" :
                sessionStorage.setItem("Loyalty", 1);
                sessionStorage.setItem("Culture", -1);
                sessionStorage.setItem("Stability", 0);
                sessionStorage.setItem("Economy", 0);
                break;
            case "Expansion" : 
                sessionStorage.setItem("Loyalty", 0);
                sessionStorage.setItem("Culture", 1);
                sessionStorage.setItem("Stability", -1);
                sessionStorage.setItem("Economy", 0);
                break;
            case "Exploration" :
                sessionStorage.setItem("Loyalty", 0);
                sessionStorage.setItem("Culture", 0);
                sessionStorage.setItem("Stability", 1);
                sessionStorage.setItem("Economy", -1);
                break;
            case "Grant" :
                sessionStorage.setItem("Loyalty", -1);
                sessionStorage.setItem("Culture", 0);
                sessionStorage.setItem("Stability", 0);
                sessionStorage.setItem("Economy", 1);
                break;
            case "Open" :
                sessionStorage.setItem("Loyalty", 0);
                sessionStorage.setItem("Culture", 0);
                sessionStorage.setItem("Stability", 0);
                sessionStorage.setItem("Economy", 0);
        }
    };

    return (
        
        <div className="aspectGrid">
        {charters.map((charter) =>(
            <div className="aspectCard" id={charter.charter_name} onClick={(e)=>{setSelected({name: charter.charter_name, id: charter.charter_id, boost: charter.ability_Boost_1})}}>
            <h1>{charter.charter_name}</h1>
            <p>{charter.charter_description}</p>
            <p>Ability Boosts: {charter.ability_Boost_1}, {charter.ability_Boost_2}</p>
            <p>Ability Flaw: {charter.ability_flaw}</p>
            </div>
          
        ))}
    </div>
    );

};

export default ChooseCharter;

