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
        const currVal = sessionStorage.getItem(chosen1);
        sessionStorage.setItem(chosen1, parseInt(currVal) - 1);
    }

    setChosen1(bonusName);
    const currVal = sessionStorage.getItem(bonusName);
    sessionStorage.setItem(bonusName, parseInt(currVal) + 1);
    sessionStorage.setItem("bonus1", e.target.id);
}

const setSecondBonus = (e)=>{
    const bonusName = e.target.value;

    if(chosen2 != "")
    {
        const currVal = sessionStorage.getItem(chosen2);
        sessionStorage.setItem(chosen2, parseInt(currVal) - 1);
    }

    setChosen2(bonusName);
    const currVal = sessionStorage.getItem(bonusName);
    sessionStorage.setItem(bonusName, parseInt(currVal) + 1);
    sessionStorage.setItem("bonus2", e.target.id);

}

const checkValid = (name)=>{
    const currVal = sessionStorage.getItem(name);
    const adds = document.getElementsByName("addboost2");
    let checkedVal;
    for(let i =0; i < adds.length; i++)
    {
        if(adds[i].checked)
        {
            checkedVal= adds[i].value;
        }
    }
    if (parseInt(currVal) + 1 > 4 && checkedVal === name) 
    {
        console.log("above3");

        return "true";
        
    } 
    else
    {
        return "";
    }
    
}

const checkValid2 = (name)=>{
    const currVal = sessionStorage.getItem(name);
    const adds = document.getElementsByName("addboost");
    let checkedVal;
    for(let i =0; i < adds.length; i++)
    {
        if(adds[i].checked)
        {
            checkedVal = adds[i].value;
        }
    }

    if (parseInt(currVal) + 1 > 4 && checkedVal === name) 
    {
        console.log("above3");
        return "true";
        
    } 
    else
    {
        return "";
    }
    
}

    return (
        <div className="signInForm">
        <label>Kingdom Name: </label>
        <input type="text" required={true} name="kingdomName" onChange={handleChange}/>

        {/* <label >Kingdom Level: </label>
        <input type="number" min="1" max="20" defaultValue="0" name="kingdomLevel" onChange={handleChange}/> */}

        <h4>Additional Ability Boosts (choose 2)</h4>

        <div>
            <label htmlFor="culture"  onClick={(e)=>{setFirstBonus(e)}}>
            <input type="radio" name="addboost" id="3" value="Culture" disabled={checkValid("Culture")}/>
            Culture</label>

            <label htmlFor="economy" onClick={(e)=>{setFirstBonus(e)}} >
            <input type="radio" name="addboost" id="4" value="Economy" disabled={checkValid("Economy")}/>
            Economy</label>

            <label htmlFor="Loyalty" onClick={(e)=>{setFirstBonus(e)}} >
            <input type="radio" name="addboost" id="5" value="Loyalty" disabled={checkValid("Loyalty")}/>
            Loyalty</label>

            <label htmlFor="stability" onClick={(e)=>{setFirstBonus(e)}} > 
            <input type="radio" name="addboost" id="6" value="Stability" disabled={checkValid("Stability")}/>
            Stability</label>
        </div>
        
        <div>
            <label htmlFor="culture" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="3" value="Culture" disabled={checkValid2("Culture")}/>
            Culture</label>
            
            <label htmlFor="economy" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="4" value="Economy" disabled={checkValid2("Economy")}/>
            Economy</label>
            
            <label htmlFor="Loyalty" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="5" value="Loyalty" disabled={checkValid2("Loyalty")}/>
            Loyalty</label>

            <label htmlFor="stability" onClick={(e)=>{setSecondBonus(e)}}>
            <input type="radio" name="addboost2" id="6" value="Stability" disabled={checkValid2("Stability")}/>
            Stability</label>
        </div>

    </div>
    );
};

export default FinalDetails;