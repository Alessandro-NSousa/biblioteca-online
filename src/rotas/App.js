import Pesquisa from '../components/pesquisa';
import UltimosLancamentos from '../components/ultimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
