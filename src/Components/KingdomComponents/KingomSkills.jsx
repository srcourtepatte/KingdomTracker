import '../../style/main.css';

const KingdomSkills = ()=>{

    const skillList = [
        "Agriculture", "Arts", "Boating", "Defense", "Engineering", "Exploration", "Folklore", "Industry",
        "Intrigue", "Magic", "Politics", "Scholarship", "Statecraft", "Trade", "Warfare", "Wilderness"
    ]

    return (
        <div className='statForm'>

            <label className='label item1'>SKILL</label>
            <label className='label item2'>Total</label>
            <label className='label item3'>Proficiency</label>
            <label className='label item4'>Training</label>

            {skillList.map((skill) => (
                <>
                <label className='nameLabel'>{skill}</label>
                <div className='statBox'></div>
                <div className='statBox'></div>
                <div className='statBox'></div>
                </>
                
            ))}

        </div>
    );
};

export default KingdomSkills;