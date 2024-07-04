import styled from "styled-components";
import { KingdomDetails, KingdomSkills, KingdomStats, RuinStat, Leaders, Commodities, Features } from "../Components";
import { useState } from "react";

const MyKingdom = ()=>{

    const [currentTab, setCurrentTab] = useState('Kingdom Sheet');
       
    
    const handleTabChange = (newTab)=>{

        setCurrentTab(newTab);
    };

    return (

    
        
        currentTab === "Kingdom Sheet" ? 
        <>
            <KingdomDetails />
            <div className="Tabs">
                <h1 className="activeTab" onClick={(e) => {handleTabChange("Kingdom Sheet")}}>Kingdom Sheet</h1>
                <h1 onClick={(e) => {handleTabChange("Features")}}>Features</h1>
                <h1 onClick={(e) => {handleTabChange("Map")}}>Map</h1>
            </div>
            <div className="kingdomSheet">
                <KingdomStats />
                <RuinStat />
                <Leaders />
                
                <KingdomSkills />
                <Commodities />
            </div>
        </> :

        currentTab === "Features" ?

        <>
            <KingdomDetails />
            <div className="Tabs">
                <h1 onClick={(e) => {handleTabChange("Kingdom Sheet")}}>Kingdom Sheet</h1>
                <h1 className="activeTab" onClick={(e) => {handleTabChange("Features")}}>Features</h1>
                <h1 onClick={(e) => {handleTabChange("Map")}}>Map</h1>
            </div>
            <div className="kingdomSheet">
                <Features TableType="FEATS"/>
                <Features TableType="ABILITIES" />
            </div>
        </> :

        <>
            <KingdomDetails />
            <div className="Tabs">
                <h1 onClick={(e) => {handleTabChange("Kingdom Sheet")}}>Kingdom Sheet</h1>
                <h1 onClick={(e) => {handleTabChange("Features")}}>Features</h1>
                <h1 className="activeTab" onClick={(e) => {handleTabChange("Map")}}>Map</h1>
            </div>
            <div className="kingdomSheet">

            </div>
        </>
    

    );
};

export default MyKingdom;