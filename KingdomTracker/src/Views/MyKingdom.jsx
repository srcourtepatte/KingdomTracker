import styled from "styled-components";
import { KingdomDetails, KingdomSkills, KingdomStats, RuinStat, Leaders, Commodities, Features } from "../Components";
import { useEffect, useRef, useState } from "react";
import apiCalls from "../api";
import { useNavigate, useParams } from "react-router-dom";



const MyKingdom = ()=>{

    const [currentTab, setCurrentTab] = useState('Kingdom Sheet');
    const calledAPI = useRef(false);
    const { id } = useParams(); 
    const { kingdomName } = useParams();
    const [data, setData] = useState(["null"]);
    const [stat, setStat] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();
    
    const handleTabChange = (newTab)=>{

        setCurrentTab(newTab);
    };

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            
            apiCalls.getKingdomSheet(id).then((result)=>{
                setData(result.data.data);
                console.log(result.data.data);
                setStat(result.data.data[1]);
            })
        }
    }, []);

    const updateLeaders = ()=>{
        navigate(`/edit-leaders/${kingdomName}/${id}`);
    };

    const refreshSheet = ()=>{
        setRefresh(!refresh);
    };

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
                <KingdomStats data={stat} setData={setStat} onUpdateStat={refreshSheet}/>
                <RuinStat data={data[2]}/>
                <Leaders data={data[5]} onClick={updateLeaders} formType="view"/>
                
                <KingdomSkills data={[data[3], data[0].kingdom_level, data[1]]} onSkillTraining={refreshSheet}/>
                <Commodities data={data[4]}/>
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

export { MyKingdom };