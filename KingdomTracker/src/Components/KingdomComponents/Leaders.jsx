import '../../style/main.css';

const Leaders = (data)=>{
console.log(data.data);

        
    const checkInvestment = (position)=>{

        if (position.invested < 1){
            return "";
        } 
        else{
            return "true";
        }
            
    }

    return (
        <div className='statForm'>
                
                <label className='label item1'> Inv</label>
                <label className='label item2'> Role</label>
                <label className='label item3'> Name</label>
            
            {data.data.map((position) => (
                <>
                <input type="checkbox" name="invested" id="invested" className='item1' checked={checkInvestment(position)} />
                <label className='nameLabel item2'>{position.role_name}</label>
                <input type="text" className='item3 leaderNames' value={position.leader_name} disabled="true"/>
                </>   
            ))}
        </div>
    );
};

export default Leaders;