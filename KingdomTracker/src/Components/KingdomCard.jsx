import { useNavigate } from "react-router-dom";

const KingdomCard = (kingdom)=>{
    const navigate = useNavigate();


    const handleNavigate = ()=>{
        console.log("click");
        navigate(`/myKingdom/${kingdom.kingdom.kingdom_name}/${kingdom.kingdom.kingdom_id}`);
    }

    return (
        <div className="kingdomCard" onClick={handleNavigate}>
            <h4>Kingdom Name: {kingdom.kingdom.kingdom_name}</h4>
            <p>Kingdom Lvl: {kingdom.kingdom.kingdom_level} </p>
        </div>
    );
};

export default KingdomCard;