import styled from "styled-components";
import '../../style/main.css'
import apiCalls from '../../api';
import { useState } from "react";
import { useParams } from "react-router-dom";
import KingdomSkills from "./KingomSkills";

const KingdomStats = ({data, setData, onUpdateStat})=>{
 
 const [updateTimer, setUpdateTimer] = useState();
 const [currQuantity, setCurrQuantity] = useState();
 const { id } = useParams();

 const incrementScore = (e)=>{
    const newData = data;
    clearTimeout(updateTimer);
    setUpdateTimer(setTimeout(updateScores, 5000));
    newData[e.target.id].ability_score += 1;
    newData[e.target.id].ability_modifier = updateModifier(newData[e.target.id].ability_score);
    onUpdateStat();

}

const decrementScore = (e)=>{
    const newData = data;
    clearTimeout(updateTimer);
    setUpdateTimer(setTimeout(updateScores, 5000));
    newData[e.target.id].ability_score -= 1;
    newData[e.target.id].ability_modifier = updateModifier(newData[e.target.id].ability_score);
    onUpdateStat();
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

                {data.map((ability, index) =>(
                    <>
                        <div className="resourceBox item1" key={index}>
                            <div className="resourceStat ">
                                <h1>{ability.ability_score}</h1>   
                            </div>
                            <div className='resIncrement'>
                                <input type="button" value="+" id={index} name={ability.ability_name} onClick={(e)=>{incrementScore(e)}}/>
                                <input type="button" value="-" id={index} name={ability.ability_name} onClick={(e)=>{decrementScore(e)}}/>   
                            </div>
                        </div>
                        <label className="nameLabel item 2">| {ability.ability_name} |</label>
                        
                    </>
                   
                ))}
                <div className="statBox cultmodifier">
                    <h1 id="cultureMod">{data[0].ability_modifier}</h1>   
                </div>
                <div className="statBox econmodifier">
                    <h1 id="economyMod">{data[1].ability_modifier}</h1>   
                </div>
                <div className="statBox loyaltyModifier">
                    <h1 id="loyaltyMod">{data[2].ability_modifier}</h1>   
                </div>
                <div className="statBox stabilityModifier">
                    <h1 id="stabilityMod">{data[3].ability_modifier}</h1>   
                </div>
       </form>
    );
};

export default KingdomStats;