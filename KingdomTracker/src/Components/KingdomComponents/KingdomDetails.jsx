import styled from "styled-components";

const KingdomDetails = (data)=>{
    console.log(data.data);

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
                <KingdomName>| DC: </KingdomName>
                <KingdomName>| Size: </KingdomName>
            </div>


        </KingdomHeader>

    );
};

export default KingdomDetails;