import {SideBar} from './layout/sidebar/SideBar';
import {Control} from './layout/control/Control';
import {Wrapper} from './componets/Wrapper';
import {Main} from './layout/main/Main';

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
