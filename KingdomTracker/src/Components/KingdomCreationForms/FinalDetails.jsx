import { useState } from "react";

const FinalDetails = ()=>{

    const [name, setName] = useState();
    const [level, setLevel] = useState(1);
    const [chosen1, setChosen1] = useState("");
    const [chosen2, setChosen2] = useState("");

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

const setFirstBonus = (e)=>{
    const bonusName = e.target.value;

    if(chosen1 != "")
    {
        const currVal = sessionStorage.getItem(chosen1)
        sessionStorage.setItem(chosen1, parseInt(currVal) - 1);
    }

    setChosen1(bonusName);
    const currVal = sessionStorage.getItem(bonusName);
    sessionStorage.setItem(bonusName, parseInt(currVal) + 1);
    sessionStorage.setItem("bonus1", e.target.value);
}

const setSecondBonus = (e)=>{
    const bonusName = e.target.value;

    if(chosen1 != "")
    {
        const currVal = sessionStorage.getItem(chosen1)
        sessionStorage.setItem(chosen2, parseInt(currVal) - 1);
    }
    console.log("here3");
    setChosen2(bonusName);
    const currVal = sessionStorage.getItem(bonusName);
    sessionStorage.setItem(bonusName, parseInt(currVal) + 1);
    sessionStorage.setItem("bonus2", bonusName);

}

const checkValid = (name)=>{
    const currVal = sessionStorage.getItem(name);
    console.log(name);
    console.log(currVal);
    if (parseInt(currVal) > 3) 
    {
        console.log("above3");
        return "false";
    } 
    else
    {
        return "false";
    }
    
}

    return (
        <div className="signInForm">
        <label>Kingdom Name: </label>
        <input type="text" required={true} name="kingdomName" onChange={handleChange}/>

        <label >Kingdom Level: </label>
        <input type="number" min="1" max="20" defaultValue="0" name="kingdomLevel" onChange={handleChange}/>

        <h4>Additional Ability Boosts (choose 2)</h4>

        <div>
            <label htmlFor="culture"  onClick={(e)=>{setFirstBonus(e)}}>
            <input type="radio" name="addboost" id="culture" value="Culture" />
            Culture</label>

            <label htmlFor="economy" onClick={(e)=>{setFirstBonus(e)}} >
            <input type="radio" name="addboost" id="economy" value="Economy" />
            Economy</label>

            <label htmlFor="Loyalty" onClick={(e)=>{setFirstBonus(e)}} >
            <input type="radio" name="addboost" id="Loyalty" value="Loyalty" />
            Loyalty</label>

            <label htmlFor="stability" onClick={(e)=>{setFirstBonus(e)}} > 
            <input type="radio" name="addboost" id="Stability" value="Stability" />
            Stability</label>
        </div>
        
        <div>
            <label htmlFor="culture" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="Culture" value="Culture" />
            Culture</label>
            
            <label htmlFor="economy" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="Economy" value="Economy" />
            Economy</label>
            
            <label htmlFor="Loyalty" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="Loyalty" value="Loyalty" />
            Loyalty</label>

            <label htmlFor="stability" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="Stability" value="Stability" />
            Stability</label>
        </div>

    </div>
    );
};

export default FinalDetails;