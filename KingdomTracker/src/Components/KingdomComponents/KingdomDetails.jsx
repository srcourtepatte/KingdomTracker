import styled from "styled-components";

const KingdomDetails = ()=>{

    const KingdomHeader = styled.div`
        display: flex;
        // justify-content: space-between;
    `

    const KingdomName = styled.h2`
        color: gold;
        text-align: right;
        margin-right: 60px;
    `;


    return (
        <KingdomHeader>
            <KingdomName>| Kingdom: </KingdomName>
            <KingdomName>| Level: </KingdomName>
            <KingdomName>| EXP: </KingdomName>
            <KingdomName>| Charter: </KingdomName>
            <KingdomName>| Heartland: </KingdomName>
            <KingdomName>| Government: </KingdomName>
            <KingdomName>| Capitol: </KingdomName>
            <KingdomName>| Fame Points: </KingdomName>
            <KingdomName>| DC: </KingdomName>
            <KingdomName>| Size: </KingdomName>

        </KingdomHeader>

    );
};

export default KingdomDetails;