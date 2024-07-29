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
            
            const selection = document.getElementById(currentHeartland.name);
            selection.classList.remove("selected");

        }

        const selection = document.getElementById(req.name);
        selection.classList.add("selected");
        setCurrentHeartland(req);
        sessionStorage.setItem("heartland", req.id);
    };


    return (
        <div className="aspectGrid">
            {heartlands.map((heartland) =>(
                <div className="aspectCard" id={heartland.heartland_name} onClick={(e)=>{setSelected({name: heartland.heartland_name, id: heartland.heartland_id})}}>
                    <h1>{heartland.heartland_name}</h1>
                    <p>{heartland.heartland_description}</p>
                    <p>Ability Boost: {heartland.ability_name}</p>
                </div>
            ))}
        </div>
    );
};


export default ChooseHeartland;