import apiCalls from "../../api";

import { useState, useEffect } from "react";

const ChooseHeartland = ()=>{

    const [heartlands, setHeartlands] = useState([]);

    useEffect(()=>{

        apiCalls.getHeartlands().then((result)=>{
            setHeartlands(result.data.data);
        }).catch((err)=>{console.log(err);});
    }, []);


    return (
        <div className="aspectGrid">
            {heartlands.map((heartland) =>(
                <div className="aspectCard">
                <h1>{heartland.heartland_name}</h1>
                <p>{heartland.heartland_description}</p>
                <p>Ability Boost: {heartland.ability_name}</p>
                </div>
              
            ))}
        </div>
    );
};

export default ChooseHeartland;