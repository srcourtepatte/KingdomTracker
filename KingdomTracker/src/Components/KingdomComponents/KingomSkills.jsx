import '../../style/main.css';
import { useState } from 'react';
import apiCalls from '../../api';
import { useParams } from 'react-router-dom';

const KingdomSkills = ({data, onSkillTraining})=>{
    console.log(data);
    const { id } = useParams();
    const [updateTimer, setUpdateTimer] = useState();
    let trained_val_arr = [];
    const skill_val_arr = ["untrained", "trained", "expert", "master", "legendary"]

    for(let i = 0; i < 16; i++)
    {
        switch(data[0][i].training_level){
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
                trained_val_arr.push("8");
                break;
        }
    };

    const getabilityModifer = (ability)=>{
        let i;
        
        for (i = 0; i < data[2].length; i++)
        {
            if (data[2][i].ability_name === ability)
            {
                return data[2][i].ability_modifier;
            }
        }
    }

    const maxSkill = (index)=>{
        if(data[0][index].training_level === "legendary")
        {
            return true;
        }

        return false;
    }

    const minSkill = (index) =>{
        if(data[0][index].training_level === "untrained")
        {
            return true;
        }

        return false;
    }

    const incrementScore = (e)=>{
        if(!maxSkill(e.target.id))
        {
            clearTimeout(updateTimer);
            const trainingValue = getIncrementedTrainingVal(e.target.id);
            setUpdateTimer(setTimeout(updateSkills(e.target.id, trainingValue), 2000));
            onSkillTraining();
        }
    }
    
    const decrementScore = (e)=>{

            if(!minSkill(e.target.id))
            {              
                clearTimeout(updateTimer); 
                const trainingValue = getDecrementedTrainingVal(e.target.id);            
                setUpdateTimer(setTimeout(updateSkills(e.target.id, trainingValue), 2000));
                onSkillTraining();
            }

    }

    const getDecrementedTrainingVal = (skillArrVal)=>{
        const newData = data;
        let i;
        for(i = 0; i < skill_val_arr.length; i++)
        {
            if (skill_val_arr[i] === newData[0][skillArrVal].training_level)
            {
                newData[0][skillArrVal].training_level = skill_val_arr[i - 1];
                data[0] = newData[0];
                break;
            }
        }  
        return newData[0][skillArrVal].training_level;
    }

    const getIncrementedTrainingVal = (skillArrVal)=>{
        const newData = data;
        let i;
        for(i = 0; i < skill_val_arr.length; i++)
            {             
                if (skill_val_arr[i] === newData[0][skillArrVal].training_level)
                {
                    console.log("in loop");
                    
                    newData[0][skillArrVal].training_level = skill_val_arr[i + 1]; 
                    data[0] = newData[0];
                    break;
                }
            }
            return newData[0][skillArrVal].training_level;
    }

    const updateSkills = (skillArrVal, trainingValue)=>{
        console.log(skillArrVal);
        console.log(data[0]);
        
        const skillid = data[0][skillArrVal].skill_id;
        console.log(trainingValue);
        const newData = {
                        skillID: skillid, 
                        trainingVal: trainingValue};
        
        
        apiCalls.updateKingdomSkill(id, newData).then((result) =>{
            console.log("for real");
            
        })
    };

    return (
        <div className='statForm'>

            <label className='label item1'>SKILL</label>
            <label className='label item2'>Total</label>
            <label className='label item3'>Prof</label>
            <label className='label item4'>Training</label>
            <label className='label item5'>Modifier</label>

            {data[0].map((skill, index) => (
                <>
                <label className='nameLabel' key={skill.skill_name}>{skill.skill_name} ({skill.ability_name.charAt(0)})</label>
                <div className='statBox'>
                    <h1>
                        {parseInt(skill.proficiency) + parseInt(trained_val_arr[index]) + parseInt(getabilityModifer(skill.ability_name)) + parseInt(data[1])}
                    </h1>
                    
                </div>
                <div className='statBox'>
                    <h1>
                        {parseInt(skill.proficiency) + parseInt(trained_val_arr[index]) + parseInt(data[1])}
                    </h1>
                </div>
                <div className="resourceBox">
                            <div className="resourceStat ">
                                <h1>{skill.training_level.charAt(0)}</h1>   
                            </div>
                            <div className='resIncrement'>
                                <input type="button" value="+" id={index} name={skill.skill_name} onClick={(e)=>{incrementScore(e)}}/>
                                <input type="button" value="-" id={index} name={skill.skill_name} onClick={(e)=>{decrementScore(e)}}/>   
                            </div>
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