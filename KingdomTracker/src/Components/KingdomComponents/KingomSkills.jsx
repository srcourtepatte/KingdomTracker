import '../../style/main.css';

const KingdomSkills = (data)=>{
console.log(data.data);
    const skillList = [
        "Agriculture", "Arts", "Boating", "Defense", "Engineering", "Exploration", "Folklore", "Industry",
        "Intrigue", "Magic", "Politics", "Scholarship", "Statecraft", "Trade", "Warfare", "Wilderness"
    ]
    let trained_val_arr = [];

    for(let i = 0; i < 16; i++)
    {
        console.log(data.data[i].training_level);
        switch(data.data[i].training_level){
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

    console.log(trained_val_arr);

    return (
        <div className='statForm'>

            <label className='label item1'>SKILL</label>
            <label className='label item2'>Total</label>
            <label className='label item3'>Prof</label>
            <label className='label item4'>Training</label>

            {data.data.map((skill, index) => (
                <>
                <label className='nameLabel'>{skill.skill_name}</label>
                <div className='statBox'>
                    {parseInt(skill.proficiency) + parseInt(trained_val_arr[index])}
                </div>
                <div className='statBox'>
                    <h1>
                        {skill.proficiency}
                    </h1>
                </div>
                <div className='statBox'>
                    <h1>{skill.training_level.charAt(0)}</h1>
                </div>
                </>
                
            ))}

        </div>
    );
};

export default KingdomSkills;