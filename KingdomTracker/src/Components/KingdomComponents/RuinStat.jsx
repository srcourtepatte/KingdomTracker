import '../../style/main.css';

const RuinStat = (data)=>{
console.log(data.data);

    return (
        <form className='statForm'>
            
                <label className='label item1'> RUIN</label>
                <label className='label item2'> Score</label>
                <label className='label item3'> Penalty</label>
                <label className='label item4'> Threshold</label>
           
            
                <label className="nameLabel">{data.data[0].ruin_name} </label>
                <div className='statBox'>
                    <h1>{data.data[0].ruin_score}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[0].penalty}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[0].threshold}</h1>
                </div>
            

            
                <label className="nameLabel">{data.data[1].ruin_name} </label>
                <div className='statBox'>
                    <h1>{data.data[1].ruin_score}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[1].penalty}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[1].threshold}</h1>
                </div>
           
            
                <label className="nameLabel">{data.data[2].ruin_name}</label>
                <div className='statBox'>
                    <h1>{data.data[2].ruin_score}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[2].penalty}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[2].threshold}</h1>
                </div>
            

            
                <label className="nameLabel">{data.data[3].ruin_name} </label>
                <div className='statBox'>
                    <h1>{data.data[3].ruin_score}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[3].penalty}</h1>
                </div>
                <div className='statBox'>
                    <h1>{data.data[3].threshold}</h1>
                </div>
            
        </form>
    );
};

export default RuinStat;