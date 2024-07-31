import styled from "styled-components";
import { KingdomDetails, KingdomSkills, KingdomStats, RuinStat, Leaders, Commodities, Features } from "../Components";
import { useEffect, useRef, useState } from "react";
import apiCalls from "../api";
import { useParams } from "react-router-dom";

const MyKingdom = ()=>{

    const [currentTab, setCurrentTab] = useState('Kingdom Sheet');
    const calledAPI = useRef(false);
    const { id } = useParams(); 
    const [details, setDetails] = useState([]);
    
    const handleTabChange = (newTab)=>{

        setCurrentTab(newTab);
    };

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            
            console.log(id);
            apiCalls.getKingdomSheet(id).then((result)=>{
                console.log(result.data.data[0]);
                setDetails(result.data.data[0]);
            })
        }
    }, [])


    return (

    
        
        currentTab === "Kingdom Sheet" ? 
        <>
            <KingdomDetails data={details}/>
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
            <KingdomDetails data={details}/>
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
            <KingdomDetails data={details}/>
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