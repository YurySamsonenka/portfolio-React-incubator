import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { SideBar } from './layout/sidebar/SideBar';
import { Control } from './layout/control/Control';

function App() {
  return (
    <StyledApp className="App">
      <SideBar />
      <Main />
      <Control />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  column-gap: min(max(27px, 2%), 30px);
`;

export default App;
