import '../../style/main.css';

const RuinStat = ()=>{

    return (
        <form className='ruinForm'>
            
                <label className='item1'> RUIN</label>
                <label className='item2'> Score</label>
                <label className='item3'> Penalty</label>
                <label className='item4'> Threshold</label>
           
            
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