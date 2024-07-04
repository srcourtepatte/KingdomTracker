import '../../style/main.css';

const RuinStat = ()=>{

    return (
        <form className='statForm'>
            
                <label className='label item1'> RUIN</label>
                <label className='label item2'> Score</label>
                <label className='label item3'> Penalty</label>
                <label className='label item4'> Threshold</label>
           
            
                <label className="nameLabel">Corruption |</label>
                <div className='statBox'></div>
                <div className='statBox'></div>
                <div className='statBox'></div>
            

            
                <label className="nameLabel">Crime |</label>
                <div className='statBox'></div>
                <div className='statBox'></div>
                <div className='statBox'></div>
           
            
                <label className="nameLabel">Decay |</label>
                <div className='statBox'></div>
                <div className='statBox'></div>
                <div className='statBox'></div>
            

            
                <label className="nameLabel">Strife |</label>
                <div className='statBox'></div>
                <div className='statBox'></div>
                <div className='statBox'></div>
            
        </form>
    );
};

export default RuinStat;