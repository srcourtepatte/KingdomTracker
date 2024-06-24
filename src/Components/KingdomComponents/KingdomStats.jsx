import styled from "styled-components";
import '../../style/main.css'

const KingdomStats = ()=>{


    return (
        <form className="statForm">
            <div className="statDiv">
                <label className="label">Score</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Culture |</label>
                <label className="label">Mod</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            </div>
            <div className="statDiv">
                <label className="label">Score</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Economy |</label>
                <label className="label">Mod</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            </div>
            <div className="statDiv">
            <label className="label">Score</label>
                <div className="statBox">
                 <h1></h1>   
                </div>
                <label className="nameLabel">| Loyalty |</label>
                <label className="label">Mod</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            </div>
            <div className="statDiv">
                <label className="label">Score</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
                <label className="nameLabel">| Stability |</label>
                <label className="label">Mod</label>
                <div className="statBox">
                    <h1></h1>   
                </div>
            </div>  
        </form>

    );
};

export default KingdomStats;