import OpcoesHeader from '../opcoesHeader';
import Icones from '../icones';
import Logo from '../logo'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    justify-content: center;
    background-color: #FFF;
    display: flex;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <Icones/>
        </HeaderContainer>
    )
    
}
export default Header;