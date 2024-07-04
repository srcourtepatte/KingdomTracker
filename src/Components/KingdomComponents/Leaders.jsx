import '../../style/main.css';

const Leaders = ()=>{

    const positions = [
        "Ruler", "Counselor", "General",  "Emissary", "Magister", "Treasurer", "Viceroy", "Warden"
    ]
        

    return (
        <div className='statForm'>
            {positions.map((position) => (
                <>
                <label className='nameLabel item1'>{position}</label>
                <label className='label item2'>Leader Name</label>
                </>   
            ))}
        </div>
    );
};

export default Leaders;