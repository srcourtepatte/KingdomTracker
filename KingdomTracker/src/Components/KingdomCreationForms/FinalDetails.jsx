

const FinalDetails = ()=>{

    return (
        <div className="signInForm">
        <label>Kingdom Name: </label>
        <input type="text" required={true} />

        <label >Kingdom Level: </label>
        <input type="number" min="1" max="20"/>

    </div>
    );
};

export default FinalDetails;