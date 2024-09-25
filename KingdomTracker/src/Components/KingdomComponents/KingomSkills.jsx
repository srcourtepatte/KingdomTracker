import '../../style/main.css';
import { useState } from 'react';

const KingdomSkills = (data)=>{
    const [refresh, setRefresh] = useState(true);

    let trained_val_arr = [];

    for(let i = 0; i < 16; i++)
    {
        switch(data.data[0][i].training_level){
            case "untrained":
                trained_val_arr.push("0");
            break;
            case "trained":
                trained_val_arr.push("2");
                break;
            case "expert": 
                trained_val_arr.push("4");
                break;
            case "master":
                trained_val_arr.push("6");
                break;
            case "legendary":
                trained_val_arr("8");
                break;
        }
    };

    const getabilityModifer = (ability)=>{
        let i;
        
        for (i = 0; i < data.data[2].length; i++)
        {
            if (data.data[2][i].ability_name === ability)
            {
                return data.data[2][i].ability_modifier;
            }
        }
    }

    const setMod = (ability)=>{
        let i;
        console.log("here");
        
        for (i = 0; i < data.data[2].length; i++)
        {
            if(data.data[2][i].ability_name === ability)
            {
                console.log("here and " + ability);
                
                switch(ability)
                {
                    case "Culture": 
                        console.log("here and here");
                        console.log(document.getElementById("cultureMod"));
                        
                        data.data[2][i].ability_modifier = document.getElementById("cultureMod").textContent;
                        
                        console.log("updated");   
                        break;
                    case "Economy":
                        data.data[2][i].ability_modifier = document.getElementById("economyMod");
                        break;
                }
                setRefresh(!refresh);
                console.log("refereshed");
                
            }
        }
        
    }

    // const cultureValChange = document.getElementsByName("Culture")
    // console.log(cultureValChange);
    // cultureValChange[0].addEventListener("click", ()=>{
    //     console.log("clicked");
    //     setMod("Culture")
    // });
    // cultureValChange[1].addEventListener("click", ()=>{
    //     console.log("clicked");
    //     setMod("Culture");
    // });




    return (
        <div className='statForm'>

            <label className='label item1'>SKILL</label>
            <label className='label item2'>Total</label>
            <label className='label item3'>Prof</label>
            <label className='label item4'>Training</label>
            <label className='label item5'>Modifier</label>

            {data.data[0].map((skill, index) => (
                <>
                <label className='nameLabel' key={skill.skill_name}>{skill.skill_name} ({skill.ability_name.charAt(0)})</label>
                <div className='statBox'>
                    <h1>
                        {parseInt(skill.proficiency) + parseInt(trained_val_arr[index]) + parseInt(getabilityModifer(skill.ability_name)) + parseInt(data.data[1])}
                    </h1>
                    
                </div>
                <div className='statBox'>
                    <h1>
                        {parseInt(skill.proficiency) + parseInt(trained_val_arr[index]) + parseInt(data.data[1])}
                    </h1>
                </div>
                <div className='statBox'>
                    <h1>{skill.training_level.charAt(0)}</h1>
                </div>
                <div className='statBox'>
                    <h1>
                        {getabilityModifer(skill.ability_name)}
                    </h1>
                </div>
                </>
                
            ))}

        </div>
    );
};

export default KingdomSkills ;