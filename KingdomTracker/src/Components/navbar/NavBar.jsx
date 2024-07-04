import { styled } from 'styled-components';

import LinkItems from './LinkItems';
import SiteName from './SiteName';

const NavBar = ()=>{


    const Header = styled.nav.attrs({
        className: "navbar navbar-expand-lg"
    })`
        background-color: rgb(91, 127, 52);
        padding: 20px;
    `

    


    return (
        <Header>
            <SiteName />
            <LinkItems />
        </Header>
    );
};

export default NavBar;