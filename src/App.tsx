import {Main} from './layout/main/Main';
import {SideBar} from './layout/sidebar/SideBar';
import {Control} from './layout/control/Control';
import {Wrapper} from './componets/Wrapper';

function App() {
  return (
    <Wrapper className="App">
      <SideBar/>
      <Main/>
      <div>
        <Control/>
      </div>
    </Wrapper>
  );
}

export default App;
