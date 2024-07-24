import { ChooseCharter, ChooseHeartland, ChooseGov, FinalDetails } from "../Components";
import { useState } from "react";

const NewKingdom = ()=>{

    const [currPage, setCurrPage] = useState(0);

    const handleNext = ()=>{
        setCurrPage(currPage+1);
        console.log(currPage);
    }

    const handleBack = ()=>{
        setCurrPage(currPage -1);
    }

    return (
        currPage === 0 ? 
        <div className="">
            <ChooseCharter />
            <div className="buttonContainer">
                <input type="button" value="Continue" onClick={handleNext} className="goodButton"/>
            </div>
        </div> :
        currPage === 1 ?
        <div className="">
            <ChooseHeartland />
            <div className="buttonContainer">
                <input type="button" value="back" onClick={handleBack} className="badButton"/>
                <input type="button" value="Continue" onClick={handleNext} className="createButton"/> 
            </div>    
        </div> :
        currPage === 2 ?
        <div className="">
            <ChooseGov />
            <div className="buttonContainer">
                <input type="button" value="back" onClick={handleBack} className="badButton"/>
                <input type="button" value="Continue" onClick={handleNext} className="createButton"/>
            </div>  
        </div> :
        <div className="">
            <FinalDetails />
            <div className="buttonContainer">
                <input type="button" value="back" onClick={handleBack} className="badButton"/>
                <input type="button" value="Continue" className="createButton"/>
            </div>
            
        </div>

    );
};

export default NewKingdom;