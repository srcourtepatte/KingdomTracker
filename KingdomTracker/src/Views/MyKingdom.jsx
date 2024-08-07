import styled from "styled-components";
import { KingdomDetails, KingdomSkills, KingdomStats, RuinStat, Leaders, Commodities, Features } from "../Components";
import { useEffect, useRef, useState } from "react";
import apiCalls from "../api";
import { useParams } from "react-router-dom";

const MyKingdom = ()=>{

    const [currentTab, setCurrentTab] = useState('Kingdom Sheet');
    const calledAPI = useRef(false);
    const { id } = useParams(); 
    const [data, setData] = useState(["null"]);
    const [abilities, setAbilities] = useState([]);
    
    const handleTabChange = (newTab)=>{

        setCurrentTab(newTab);
    };

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            
            console.log(id);
            apiCalls.getKingdomSheet(id).then((result)=>{
                console.log(result.data.data);
                setData(result.data.data);
            })
        }
    }, [])


    return (

    data[0] === "null" ?   <div>
                     Loading...
                    </div> :
        
        currentTab === "Kingdom Sheet" ? 
        <>
            <KingdomDetails data={data[0]}/>
            <div className="Tabs">
                <h1 className="activeTab" onClick={(e) => {handleTabChange("Kingdom Sheet")}}>Kingdom Sheet</h1>
                <h1 onClick={(e) => {handleTabChange("Features")}}>Features</h1>
                <h1 onClick={(e) => {handleTabChange("Map")}}>Map</h1>
            </div>
            <div className="kingdomSheet">
                <KingdomStats data={data[1]}/>
                <RuinStat data={data[2]}/>
                <Leaders />
                
                <KingdomSkills data={data[3]}/>
                <Commodities />
            </div>
        </> :

        currentTab === "Features" ?

        <>
            <KingdomDetails data={data[0]}/>
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
            <KingdomDetails data={data[0]}/>
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