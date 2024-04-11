import styled from 'styled-components'
import CardRecomendacao from '../cardRecomendacao'
import {Titulo} from '../titulo'
import {livros} from './dadosUltimosLancamentos'
import livro2 from '../../imagens/livro2.png'

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const ListaLivros = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">Últimos Lancamentos</Titulo>
            <ListaLivros>
                {livros.map( livro => (
                    <img src={livro.src} />        
                ))}
            </ListaLivros>
            
            <CardRecomendacao 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma do google"
                img={livro2}

            />
        </LancamentosContainer>
        
    )
    
}

export default UltimosLancamentos;