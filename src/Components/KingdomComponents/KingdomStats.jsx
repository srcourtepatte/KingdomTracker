import styled from "styled-components";
import '../../style/main.css'

const KingdomStats = ()=>{


    return (
        <form className="statForm">
            
                <label className="label item1">Score</label>
                <label className="label item2">ABILITY</label>
                <label className="label item3">Modifier</label>

                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Culture |</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            
                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Economy |</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            
                <div className="statBox">
                 <h1></h1>   
                </div>
                <label className="nameLabel">| Loyalty |</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            
                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Stability |</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            
        </form>

    );
};

export default KingdomStats;