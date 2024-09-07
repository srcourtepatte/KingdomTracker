import '../../style/main.css';

const KingdomSkills = (data)=>{

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


    return (
        <div className='statForm'>

            <label className='label item1'>SKILL</label>
            <label className='label item2'>Total</label>
            <label className='label item3'>Prof</label>
            <label className='label item4'>Training</label>
            <label className='label item5'>Modifier</label>

            {data.data[0].map((skill, index) => (
                <>
                <label className='nameLabel' >{skill.skill_name}</label>
                <div className='statBox'>
                    <h1>
                        {parseInt(skill.proficiency) + parseInt(trained_val_arr[index]) + parseInt(skill.ability_modifier) + parseInt(data.data[1])}
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
                        {skill.ability_modifier}
                    </h1>
                </div>
                </>
                
            ))}

        </div>
    );
};

export default KingdomSkills;