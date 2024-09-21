import styled from "styled-components";
import '../../style/main.css'
import apiCalls from '../../api';
import { useState } from "react";
import { useParams } from "react-router-dom";

const KingdomStats = (data)=>{
 
 const [updateTimer, setUpdateTimer] = useState();
 const [currQuantity, setCurrQuantity] = useState();
 const { id } = useParams();

 const incrementScore = (e)=>{
    clearTimeout(updateTimer);
    setUpdateTimer(setTimeout(updateScores, 15000));
    data.data[e.target.id].ability_score += 1;
    data.data[e.target.id].ability_modifier = updateModifier(data.data[e.target.id].ability_score);
    setCurrQuantity(data.data[e.target.id].ability_score);
}

const decrementScore = (e)=>{
    clearTimeout(updateTimer);
    setUpdateTimer(setTimeout(updateScores, 15000));
    data.data[e.target.id].ability_score -= 1;
    data.data[e.target.id].ability_modifier = updateModifier(data.data[e.target.id].ability_score);
    setCurrQuantity(data.data[e.target.id].ability_score);
}

const updateModifier = (score)=>{

        return Math.floor((parseInt(score) - 10) / 2);

}

const updateScores = ()=>{
    apiCalls.updateKingdomScores(id, data).then((result)=>{
        console.log("updated"); 
    });
    
}

    return (
        <form className="statForm">
            
                <label className="label item1">Score</label>
                <label className="label item2">ABILITY</label>
                <label className="label item3">Modifier</label>

                {data.data.map((ability, index) =>(
                    <>
                        <div className="resourceBox">
                            <div className="resourceStat">
                                <h1>{ability.ability_score}</h1>   
                            </div>
                            <div className='resIncrement'>
                                <input type="button" value="+" id={index}  onClick={(e)=>{incrementScore(e)}}/>
                                <input type="button" value="-" id={index}  onClick={(e)=>{decrementScore(e)}}/>   
                            </div>
                        </div>
                        <label className="nameLabel">| {ability.ability_name} |</label>
                        <div className="statBox">
                            <h1>{ability.ability_modifier}</h1>   
                        </div>
                    </>
                   
                ))}
       </form>
    );
};

export default KingdomStats;