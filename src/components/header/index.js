import OpcoesHeader from '../opcoesHeader';
import Icones from '../icones';
import Logo from '../logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    justify-content: center;
    background-color: #FFF;
    display: flex;
`

function Header() {
    return (
        <HeaderContainer>
           <Link to={"/"}>
                <Logo />
           </Link>
            <OpcoesHeader/>
            <Icones/>
        </HeaderContainer>
    )
    
}
export default Header;