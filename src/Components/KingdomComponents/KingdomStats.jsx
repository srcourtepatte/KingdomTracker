import styled from "styled-components";
import '../../style/main.css'

const KingdomStats = ()=>{

    const StatForm = styled.form`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-top: 30px;
        background-color: rgb(91, 127, 52);
        border: 1px solid gold;
        width: 30%;
        height: 15vh;
    `;

    return (
        <StatForm>
            <div className="statDiv">
                <label className="label">Culture:</label>
            </div>
            <div className="statDiv">
                <label className="label">Economy:</label>
            </div>
            <div className="statDiv">
                <label className="label">Loyalty:</label>
            </div>
            <div className="statDiv">
                <label className="label">Stability:</label>
            </div>
            
        </StatForm>

    );
};

export default KingdomStats;