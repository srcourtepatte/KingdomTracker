import { useState } from 'react';
import '../../style/main.css';
import apiCalls from '../../api';
import { useParams } from 'react-router-dom';

const RuinStat = (data)=>{
    const [updateTimer, setUpdateTimer] = useState();
    const [currQuantity, setCurrQuantity] = useState();
    const {id} = useParams();
    
    const incrementRuin = (e)=>{
        
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateRuin, 1000));        
        data.data[e.target.id].ruin_score += 1;
        setCurrQuantity(data.data[e.target.id].ruin_score);
        checkThreshold(e.target.id);
    }

    const decrementRuin = (e)=>{
        if(parseInt(data.data[e.target.id].ruin_score) > 0){
            clearTimeout(updateTimer);
            setUpdateTimer(setTimeout(updateRuin, 15000));
            data.data[e.target.id].ruin_score -= 1;
            setCurrQuantity(data.data[e.target.id].ruin_score);
        }
        
    }

    const incrementPenalty = (e)=>{
        if(data.data[e.target.id].penalty < 0){
            clearTimeout(updateTimer);
            setUpdateTimer(setTimeout(updateRuin, 15000));        
            data.data[e.target.id].penalty += 1;
            setCurrQuantity(data.data[e.target.id].penalty);
        }
    }

    const decrementPenalty = (e)=>{
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateRuin, 15000));
        data.data[e.target.id].penalty -= 1;
        setCurrQuantity(data.data[e.target.id].penalty);
    }

    const incrementThreshold = (e)=>{
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateRuin, 15000));
        data.data[e.target.id].threshold += 1;
        setCurrQuantity(data.data[e.target.id].threshold);
    }

    const decrementThreshold = (e)=>{
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateRuin, 15000));
        data.data[e.target.id].threshold -= 1;
        setCurrQuantity(data.data[e.target.id].threshold);
    }

    const updateRuin = ()=>{
        apiCalls.updateKingdomRuin(id, data).then((result)=>{
            console.log("updated");
            
        })
        
    }

    const checkThreshold = (index)=>{
        if(data.data[index].ruin_score > data.data[index].threshold)
        {
            data.data[index].ruin_score -= data.data[index].threshold;
            data.data[index].penalty -= 1;
            setCurrQuantity(index);
        }
    }

    return (
        <form className='statForm'>
            
                <label className='label item1'> RUIN</label>
                <label className='label item2'> Score</label>
                <label className='label item3'> Penalty</label>
                <label className='label item4'> Threshold</label>
           
            
                <label className="nameLabel">{data.data[0].ruin_name} </label>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[0].ruin_score}</h1>    
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="0" onClick={(e)=>{incrementRuin(e)}}/>
                        <input type="button" value="-" id="0" onClick={(e)=>{decrementRuin(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[0].penalty}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="0" onClick={(e)=>{incrementPenalty(e)}}/>
                        <input type="button" value="-" id="0" onClick={(e)=>{decrementPenalty(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[0].threshold}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="0" onClick={(e)=>{incrementThreshold(e)}}/>
                        <input type="button" value="-" id="0" onClick={(e)=>{decrementThreshold(e)}}/>   
                    </div>
                </div>
                
            

            
                <label className="nameLabel">{data.data[1].ruin_name} </label>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[1].ruin_score}</h1>    
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="1" onClick={(e)=>{incrementRuin(e)}}/>
                        <input type="button" value="-" id="1" onClick={(e)=>{decrementRuin(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[1].penalty}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="1" onClick={(e)=>{incrementPenalty(e)}}/>
                        <input type="button" value="-" id="1" onClick={(e)=>{decrementPenalty(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[1].threshold}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="1" onClick={(e)=>{incrementThreshold(e)}}/>
                        <input type="button" value="-" id="1" onClick={(e)=>{decrementThreshold(e)}}/>   
                    </div>
                </div>
           
            
                <label className="nameLabel">{data.data[2].ruin_name}</label>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[2].ruin_score}</h1>    
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="2" onClick={(e)=>{incrementRuin(e)}}/>
                        <input type="button" value="-" id="2" onClick={(e)=>{decrementRuin(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[2].penalty}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="2" onClick={(e)=>{incrementPenalty(e)}}/>
                        <input type="button" value="-" id="2" onClick={(e)=>{decrementPenalty(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[2].threshold}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="2" onClick={(e)=>{incrementThreshold(e)}}/>
                        <input type="button" value="-" id="2" onClick={(e)=>{decrementThreshold(e)}}/>   
                    </div>
                </div>
            

            
                <label className="nameLabel">{data.data[3].ruin_name} </label>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[3].ruin_score}</h1>    
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="3" onClick={(e)=>{incrementRuin(e)}}/>
                        <input type="button" value="-" id="3" onClick={(e)=>{decrementRuin(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[3].penalty}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="3" onClick={(e)=>{incrementPenalty(e)}}/>
                        <input type="button" value="-" id="3" onClick={(e)=>{decrementPenalty(e)}}/>   
                    </div>
                </div>
                <div className='resourceBox'>
                    <div className='resourceStat'>
                        <h1>{data.data[3].threshold}</h1>
                    </div>
                    <div className='resIncrement item1'>
                        <input type="button" value="+" id="3" onClick={(e)=>{incrementThreshold(e)}}/>
                        <input type="button" value="-" id="3" onClick={(e)=>{decrementThreshold(e)}}/>   
                    </div>
                </div>
            
        </form>
    );
};

export default RuinStat;