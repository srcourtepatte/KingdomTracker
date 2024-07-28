import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LinkElements = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px;
`;

const List = styled.div.attrs({
    className: "navbar-nav me-auto"
})`
    text-align: right;
    font-size: 2REM;
`;

const LinkItems = ()=>{
    return (
        <>
            <List>
                <LinkElements className="navbar-link" as={Link} to="/dashboard">Home</LinkElements>
                <LinkElements className="navbar-link" as={Link} to="/mykingdom">My Kingdom</LinkElements>
                <LinkElements className="navbar-link" as={Link} to="/login">Login</LinkElements>
            </List>
            
        </>
    );
};

export default LinkItems;
