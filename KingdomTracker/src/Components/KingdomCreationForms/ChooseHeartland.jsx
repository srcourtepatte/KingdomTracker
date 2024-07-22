import apiCalls from "../../api";


const ChooseHeartland = ()=>{

    const heartlands = apiCalls.getHeartlands().then((result)=>{
        console.log(result);
    }).catch((err)=>{console.log(err);});


    const getheartlands = ()=>{
        console.log(heartlands);
    }

    return (
        <div className="aspectGrid">
            <input type="button" value="click" onClick={getheartlands} />
        </div>
    );
};

export default ChooseHeartland;