import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icones = [perfil, sacola];
function Icones() {
    return (
        <IconesContainer>
            {icones.map( (icone) => (
              <Icone><img src={icone}></img></Icone>
            ))}
        </IconesContainer>
    )
    
}

export default Icones;