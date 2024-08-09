import '../../style/main.css';

const Leaders = (data)=>{
console.log(data.data);
    const positions = [
        "Ruler", "Counselor", "General",  "Emissary", "Magister", "Treasurer", "Viceroy", "Warden"
    ]
        

    return (
        <div className='statForm'>
            {data.data.map((position) => (
                <>
                <label className='nameLabel item1'>{position.role_name}</label>
                <label className='label item2'>{position.leader_name}</label>
                </>   
            ))}
        </div>
    );
};

export default Leaders;