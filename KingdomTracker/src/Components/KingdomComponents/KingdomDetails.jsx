import styled from "styled-components";

const KingdomDetails = (data)=>{
    console.log(data.data);
    let dc;
    const klevel = parseInt(data.data.kingdom_level);
    const KingdomHeader = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    `

    const KingdomName = styled.h2`
        color: gold;
        display: flex;
        flex-direction: row;

    `;

    switch(klevel){
        case 1:
        case 2:
        case 3:
            dc = (klevel + 13);
            break;
        case 4:
            dc =(klevel + 14);
            break;
        case 5: 
        dc =(klevel + 15);
            break;
        case 6:
        case 7:
        case 8:
            dc =(klevel + 16);
            break;
        case 9:
        case 10:
        case 11:
            dc =(klevel + 17);
            break;
        case 12:
        case 13:
        case 14:
            dc =(klevel + 18)
            break;
        case 15:
        case 16:
        case 17:
            dc =(klevel + 19);
            break;
        case 18:
        case 19:
        case 20:
            dc =(klevel + 20);
            break;  
    };


    return (
        <KingdomHeader>
            <div className="detailHeader">
                <KingdomName>| Kingdom: {data.data.kingdom_name}</KingdomName>
                <KingdomName>| Charter: {data.data.charter_name}</KingdomName>
                <KingdomName>| Heartland: {data.data.heartland_name}</KingdomName>
                <KingdomName>| Government: {data.data.government_name}</KingdomName>
                <KingdomName>| Capitol: </KingdomName>
            </div>

            <div className="detailHeader">
                <KingdomName>| Level: {data.data.kingdom_level}</KingdomName>
                <KingdomName>| EXP: {data.data.kingdom_exp}</KingdomName>
                <KingdomName>| Fame Points: {data.data.fame_points}</KingdomName>
                <KingdomName>| DC: {dc}</KingdomName>
                <KingdomName>| Size: </KingdomName>
            </div>


        </KingdomHeader>

    );
};

export default KingdomDetails;