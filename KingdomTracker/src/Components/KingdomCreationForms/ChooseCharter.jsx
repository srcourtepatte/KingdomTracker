import { useEffect, useState } from "react";
import apiCalls from "../../api";

const ChooseCharter = ()=>{

    const [charters, setCharters] = useState([]);

    useEffect(()=>{
        apiCalls.getCharters().then((result)=>{
            console.log(result.data.data);
            setCharters(result.data.data);
        });
    }, []);

    return (
        
        <div className="aspectGrid">
        {charters.map((charter) =>(
            <div className="aspectCard">
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

