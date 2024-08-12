import '../../style/main.css';
import { useState } from 'react';

const Leaders = ({data, onClick, formType})=>{
    console.log(data);
    console.log(formType);
        
    const checkInvestment = (position)=>{

        if (position.invested < 1){
            return false;
        } 
        else{
            return true;
        }
            
    }

    const checkFormType = ()=>{
        if(formType === "edit")
        {
            console.log("edit");
            
            return "";
        }
        if(formType === "view")
        {
            console.log("disabled");
            return "true";
        }
    }

    const handleNameUpdate = (e)=>{
        for(let i = 0; i < data.length; i++){
            if(data[i].role_name === e.target.id)
            {
                console.log(e.target.value);
                
                data[i].leader_name = e.target.value;
                console.log(data);
                
            };
        };
    }

    const updateInvestment = (e)=>{
        console.log(e.target);

        if(formType === "view"){
            e.target.checked = !e.target.checked;
        }

        if (formType === "edit") {
            for(let i = 0; i < 8; i++){
                if(data[i].role_name === e.target.value){
                    if(e.target.checked){
                        data[i].invested = 1;
                    }
                    else{
                        data[i].invested = 0;
                    }
                }
            };
        }

        console.log(data);
        
    }

    return (
        <div className='statForm'>
                
                <label className='label item1'> Inv</label>
                <label className='label item2'> Role</label>
                <label className='label item3'> Name</label>
            
            {data.map((position, index) => (
                <>
                <input type="checkbox" name="invested" id={position.role_name} className='item1' defaultChecked={checkInvestment(position)} onClick={(e) =>{updateInvestment(e)}}/>
                <label className='nameLabel item2'>{position.role_name}</label>
                <input type="text" className='item3 leaderNames' id={position.role_name} value={position.leader_name} disabled={checkFormType()} onChange={(e) =>{handleNameUpdate(e)}}/>
                </>   
            ))}
            <input type="button" name="update" id="update" className='goodButton' value="Update" onClick={onClick} hidden={!checkFormType()}/>
            <input type="button" name="save" id="save" className='goodButton' value="Save" hidden={checkFormType()}/>
        </div>
    );
};

export default Leaders;