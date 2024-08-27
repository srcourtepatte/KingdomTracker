import { useParams } from 'react-router-dom';
import '../../style/main.css';
import apiCalls from '../../api';
import { useRef, useState } from 'react';

const Feats = ({TableType})=>{
    const { id } = useParams();
    const [data, setData] = useState([]);
    const apiCalled = useRef(false);

    if (TableType === "FEATS") {
        if(!apiCalled.current){
            apiCalled.current = true;
            apiCalls.getKingdomFeats(id).then( (result)=>{
                console.log(result.data.data);
                
                setData(result.data.data);
            });
        }
    };
    
    
    return (

         data.length > 0 ?
        <div className='statForm'>
            <label className='nameLabel gridhead'>{TableType}</label>
            {data.map((feat) => (
                <div>
                    <h1>{feat.feat_name}</h1>
                    <p>{feat.feat_description}</p>
                </div>
            ))}

        </div> :
        
        <div className='statForm'>
            <label className='nameLabel gridhead'>{TableType}</label>
        </div>

    );
};

export default Feats;