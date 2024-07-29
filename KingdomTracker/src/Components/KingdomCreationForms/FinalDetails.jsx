import { useState } from "react";

const FinalDetails = ()=>{

    const [name, setName] = useState();
    const [level, setLevel] = useState(1);

    // sessionStorage.setItem("level", 1);

    const handleChange = (e)=>{
        console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
           case 'kingdomName' : 
           setName(value);
           sessionStorage.setItem("name", value);
           break;

           case 'kingdomLevel' :
            setLevel(value);
            sessionStorage.setItem("level", value);
            break;
        } 
         
    };

    return (
        <div className="signInForm">
        <label>Kingdom Name: </label>
        <input type="text" required={true} name="kingdomName" onChange={handleChange}/>

        <label >Kingdom Level: </label>
        <input type="number" min="1" max="20" defaultValue="0" name="kingdomLevel" onChange={handleChange}/>

    </div>
    );
};

export default FinalDetails;