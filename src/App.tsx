import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { SideBar } from './layout/sidebar/SideBar';
import { Control } from './layout/control/Control';
import { Wrapper } from './componets/Wrapper';

function App() {
  return (
    <Wrapper className="App">
      <SideBar />
      <Main />
      <Control />
    </Wrapper>
  );
}

export default App;
