import apiCalls from "../../api";

import { useState, useEffect } from "react";

const ChooseHeartland = ()=>{

    const [heartlands, setHeartlands] = useState([]);
    const [currentHeartland, setCurrentHeartland] = useState([]);

    useEffect(()=>{

        apiCalls.getHeartlands().then((result)=>{
            setHeartlands(result.data.data);
        }).catch((err)=>{console.log(err);});
    }, []);


    const setSelected = (req)=>{

        if(currentHeartland.name != null){
            console.log(currentHeartland);
            const selection = document.getElementById(currentHeartland.name);
            selection.classList.remove("selected");
            const currentVal = sessionStorage.getItem(currentHeartland.boost);
            sessionStorage.setItem(currentHeartland.boost, parseInt(currentVal) - 1);
        }

        const selection = document.getElementById(req.name);
        selection.classList.add("selected");
        setCurrentHeartland(req);
        sessionStorage.setItem("heartland", req.id);
        const currentVal = sessionStorage.getItem(req.boost);
        sessionStorage.setItem(req.boost, parseInt(currentVal) + 1 );
    };


    return (
        <div className="aspectGrid">
            {heartlands.map((heartland) =>(
                <div className="aspectCard" id={heartland.heartland_name} onClick={(e)=>{setSelected({name: heartland.heartland_name, id: heartland.heartland_id, boost: heartland.ability_name})}}>
                    <h1>{heartland.heartland_name}</h1>
                    <p>{heartland.heartland_description}</p>
                    <p>Ability Boost: {heartland.ability_name}</p>
                </div>
            ))}
        </div>
    );
};


export default ChooseHeartland;