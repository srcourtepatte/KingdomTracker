import apiCalls from "../../api";

import { useState, useEffect } from "react";

const ChooseHeartland = ()=>{

    const [heartlands, setHeartlands] = useState([]);

    useEffect(()=>{

        apiCalls.getHeartlands().then((result)=>{
            console.log(result.data.data);
        setHeartlands( result.data.data
        );
        }).catch((err)=>{console.log(err);});
    }, []);

    const getheartlands = ()=>{
        console.log("here");
        console.log(heartlands);
    };

    return (
        <div className="aspectGrid">
            {heartlands.map((heartland) =>(
                <div className="aspectCard">
                <h1>{heartland.heartland_name}</h1>
                <p>{heartland.heartland_description}</p>
                <p>{heartland.ability_name}</p>
                </div>
              
            ))}
            <input type="button" value="click" onClick={getheartlands} />
        </div>
    );
};

export default ChooseHeartland;