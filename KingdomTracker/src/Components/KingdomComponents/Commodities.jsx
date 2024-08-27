import '../../style/main.css';

const Commodities = (data)=>{

    return (
        <div className='statForm'>
            <label className='label item1'>{data.data[0].resource_name}</label>
            <label className='label item2'>{data.data[1].resource_name}</label>
            <label className='label item3'>{data.data[2].resource_name}</label>
            <label className='label item4'>{data.data[3].resource_name}</label>
            <label className='label item5'>{data.data[4].resource_name}</label>

            <div className='statBox'>
                <h1>{data.data[0].quantity_of_resource}</h1>
            </div>
            <div className='statBox'>
                <h1>{data.data[1].quantity_of_resource}</h1>
            </div>
            <div className='statBox'>
                <h1>{data.data[2].quantity_of_resource}</h1>
            </div>
            <div className='statBox'>
                <h1>{data.data[3].quantity_of_resource}</h1>
            </div>
            <div className='statBox'>
                <h1>{data.data[4].quantity_of_resource}</h1>
            </div>

        </div>
    );
};

export default Commodities;