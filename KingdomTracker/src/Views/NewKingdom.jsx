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
            <input type="button" value="Continue" onClick={handleNext}/>
        </div> :
        currPage === 1 ?
        <div className="">
            <ChooseHeartland />
            <input type="button" value="back" onClick={handleBack}/>
            <input type="button" value="Continue" onClick={handleNext}/> 
        </div> :
        currPage === 2 ?
        <div className="">
            <ChooseGov />
            <input type="button" value="back" onClick={handleBack}/>
            <input type="button" value="Continue" onClick={handleNext}/>
        </div> :
        <div className="">
            <FinalDetails />
            <input type="button" value="back" onClick={handleBack}/>
            <input type="button" value="Continue" onClick={handleNext}/>
        </div>

    );
};

export default NewKingdom;