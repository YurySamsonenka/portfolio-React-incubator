import { Main } from './layout/main/Main';
import { SideBar } from './layout/sidebar/SideBar';
import { Control } from './layout/control/Control';
import { Wrapper } from './componets/Wrapper';
import { WrapperForMain } from './componets/WrapperForMain';

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
