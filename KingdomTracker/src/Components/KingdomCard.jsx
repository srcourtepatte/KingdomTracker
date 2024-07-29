import { useNavigate } from "react-router-dom";

const KingdomCard = (kingdom)=>{
    const navigate = useNavigate();


    const handleNavigate = (kingdomName)=>{
        console.log("click");
        navigate(`/myKingdom/${kingdomName}`)
    }

    return (
        <div className="kingdomCard" onClick={(e) => {handleNavigate(kingdom.kingdom.kingdom_name)}}>
            <h4>Kingdom Name: {kingdom.kingdom.kingdom_name}</h4>
            <p>Kingdom Lvl: {kingdom.kingdom.kingdom_level} </p>
        </div>
    );
};

export default KingdomCard;