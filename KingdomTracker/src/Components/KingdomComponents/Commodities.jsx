import { useState } from 'react';
import '../../style/main.css';
import apiCalls from '../../api';
import { useParams } from 'react-router-dom';

const Commodities = (data)=>{
    const [rpValue, setRpValue] = useState(0);
    const [currQuantity, setCurrQuantity] = useState();
    const [updateTimer, setUpdateTimer] = useState();
    const { id } = useParams();

    const incrementResource = (e)=>{
        
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateResources, 5000));        
        data.data[e.target.id].quantity_of_resource += 1;
        setCurrQuantity(data.data[e.target.id].quantity_of_resource);
    }

    const decrementResource = (e)=>{
        clearTimeout(updateTimer);
        setUpdateTimer(setTimeout(updateResources, 5000));
        data.data[e.target.id].quantity_of_resource -= 1;
        setCurrQuantity(data.data[e.target.id].quantity_of_resource);
    }

    const updateResources = ()=>{
        console.log("updated");
        apiCalls.updateKingdomResources(id, data.data[0].quantity_of_resource, data.data[1].quantity_of_resource, data.data[2].quantity_of_resource,
            data.data[3].quantity_of_resource, data.data[4].quantity_of_resource).then(async (result)=>{
                console.log(result);
            });        
    }

    return (
        <div className='statForm'>
            <label className='label item1'>{data.data[0].resource_name}</label>
            <label className='label item2'>{data.data[1].resource_name}</label>
            <label className='label item3'>{data.data[2].resource_name}</label>
            <label className='label item4'>{data.data[3].resource_name}</label>
            <label className='label item5'>{data.data[4].resource_name}</label>
            <label className='label item6'>rp</label>

            <div className='resourceBox'>
                 <div className='resourceStat' id="0">
                    <h1>{data.data[0].quantity_of_resource}</h1>
                </div>
                <div className='resIncrement item1'>
                    <input type="button" value="+" id="0" onClick={(e)=>{incrementResource(e)}}/>
                    <input type="button" value="-" id="0" onClick={(e)=>{decrementResource(e)}}/>   
                </div>
            </div>
           
            <div className='resourceBox'>
                <div className='resourceStat'>
                    <h1>{data.data[1].quantity_of_resource}</h1>
                </div>
                <div className='resIncrement'>
                    <input type="button" value="+" id="1" onClick={(e)=>{incrementResource(e)}}/>
                    <input type="button" value="-" id="1" onClick={(e)=>{decrementResource(e)}}/>   
                </div>
            </div>

            <div className='resourceBox'>
                <div className='resourceStat'>
                    <h1>{data.data[2].quantity_of_resource}</h1>
                </div>
                <div className='resIncrement'>
                    <input type="button" value="+" id="2" onClick={(e)=>{incrementResource(e)}}/>
                    <input type="button" value="-" id="2" onClick={(e)=>{decrementResource(e)}}/>   
                </div>
            </div>
           
            <div className='resourceBox'>
                <div className='resourceStat'>
                    <h1>{data.data[3].quantity_of_resource}</h1>
                </div>
                <div className='resIncrement'>
                    <input type="button" value="+" id="3" onClick={(e)=>{incrementResource(e)}}/>
                    <input type="button" value="-" id="3" onClick={(e)=>{decrementResource(e)}}/>   
                </div>  
            </div>
            
            <div className='resourceBox'>
                <div className='resourceStat'>
                    <h1>{data.data[4].quantity_of_resource}</h1>
                </div>
                <div className='resIncrement'>
                    <input type="button" value="+" id="4" onClick={(e)=>{incrementResource(e)}}/>
                    <input type="button" value="-" id="4" onClick={(e)=>{decrementResource(e)}}/>   
                </div>
            </div>
            
            <div className='resourceBox'>
                <div className='resourceStat'>
                    <h1>{rpValue}</h1>
                </div>
                <div className='resIncrement'>
                    <input type="button" value="+" onClick={(e) => {setRpValue(rpValue + 1)}}/>
                    <input type="button" value="-" onClick={(e) => {setRpValue(rpValue - 1)}}/>   
                </div>
            </div>
           

        </div>
    );
};

export default Commodities;