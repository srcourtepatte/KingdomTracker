import { useParams } from 'react-router-dom';
import '../../style/main.css';
import apiCalls from '../../api';
import { useRef, useState } from 'react';

const Feats = ({TableType})=>{
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [featList, setFeatList] = useState([]);
    const apiCalled = useRef(false);
    const [currFeat, setCurrFeat] = useState();


    if (TableType === "FEATS") {
        if(!apiCalled.current){
            apiCalled.current = true;
            apiCalls.getKingdomFeats(id).then( (result)=>{
                console.log(result.data.data);
                setData(result.data.data);
            });
            apiCalls.getAllFeats().then((result) =>{
                setFeatList(result.data.data);
            });
        }
    };

    const addnewFeat = ()=>{
        const newFeatDiv = document.getElementById('newFeatDiv');
        newFeatDiv.classList.remove('hidden');
    }

    const hideFeats = ()=>{
        const newFeatDiv = document.getElementById('newFeatDiv');
        newFeatDiv.classList.add('hidden');
    }

    const selectDiv = (id)=>{
        
        if(currFeat != null)
        {
            const selection = document.getElementById(currFeat);
            selection.classList.remove("selected");
        }

        const selection = document.getElementById(id);
        selection.classList.add("selected");
        setCurrFeat(id);
    }

    const saveFeat = ()=>{
        apiCalls.addKingdomFeat(id, currFeat).then((result)=>{
            setCurrFeat(null);
            hideFeats();
        })
    }
    
    
    return (

         data.length > 0 ?
         <>
            <div className='statForm'>
                <label className='nameLabel gridhead'>{TableType}</label>
                {data.map((feat) => (
                    <div>
                        <h1>{feat.feat_name}</h1>
                        <p>{feat.feat_description}</p>
                    </div>
                ))}
                <input type="button" value="+ Add Feat" onClick={addnewFeat} className='goodButton'/>
            </div>
            <div className='newFeatList hidden' id='newFeatDiv'>
                {featList.map((feat) => (
                    <div onClick={(e)=>{selectDiv(feat.feat_id)}} id={feat.feat_id}>
                        <h1>{feat.feat_name}</h1>
                        <p>{feat.feat_description}</p>
                    </div>
                ))}
                <div className='buttonContainer'>
                    <input type="button" value="Cancel" className='badButton' onClick={hideFeats}/>
                    <input type="button" value="Add Feat" className='goodButton' onClick={saveFeat}/>
                </div>

            </div>
         </>
 :
        
        <div className='statForm'>
            <label className='nameLabel gridhead'>{TableType}</label>
        </div>

    );
};

export default Feats;