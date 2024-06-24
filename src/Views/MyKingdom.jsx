import styled from "styled-components";
import { KingdomDetails, KingdomSkills, KingdomStats, RuinStat, Leaders, Commodities } from "../Components";

const MyKingdom = ()=>{


    return (
        <>
            <KingdomDetails />
            <div className="kingdomSheet">
                <KingdomStats />
                <RuinStat />
                <Leaders />
                <KingdomSkills />
                <Commodities />
            </div>

        </>
    

    );
};

export default MyKingdom;