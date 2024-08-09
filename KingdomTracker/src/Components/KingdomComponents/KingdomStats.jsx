import styled from "styled-components";
import '../../style/main.css'

const KingdomStats = (data)=>{
 

    return (
        <form className="statForm">
            
                <label className="label item1">Score</label>
                <label className="label item2">ABILITY</label>
                <label className="label item3">Modifier</label>

                <div className="statBox">
                    <h1>{data.data[0].ability_score}</h1>   
                </div>
                <label className="nameLabel">| {data.data[0].ability_name} |</label>
                <div className="statBox">
                    <h1>{data.data[0].ability_modifier}</h1>   
                </div>
            
                <div className="statBox">
                    <h1>{data.data[1].ability_score}</h1>   
                </div>
                <label className="nameLabel">| {data.data[1].ability_name} |</label>
                <div className="statBox">
                    <h1>{data.data[1].ability_modifier}</h1>   
                </div>
           
                <div className="statBox">
                 <h1>{data.data[2].ability_score}</h1>   
                </div>
                <label className="nameLabel">| {data.data[2].ability_name} |</label>
                <div className="statBox">
                    <h1>{data.data[2].ability_modifier}</h1>   
                </div>
            
                <div className="statBox">
                    <h1>{data.data[3].ability_score}</h1>   
                </div>
                <label className="nameLabel">| {data.data[3].ability_name} |</label>
                <div className="statBox">
                    <h1>{data.data[3].ability_modifier}</h1>   
                </div>
            
        </form>

    );
};

export default KingdomStats;