import { SideBar } from './layout/Info-panel/SideBar.styled';
import { dbSideBar } from './layout/Info-panel/bd';
import { SocialLink } from './componets/social-link/SocialLink.styled';

function App() {
  return (
    <div className="App">
      <SideBar>
        <img src="./assets/images/photo.png" alt="mini-profile" />
        <span>Rayan Adlardard</span>
        <span>Font-end Developer</span>
        <div>
          {Object.entries(dbSideBar.social).map(
            (item: [string, string], index: number) => (
              <SocialLink key={index} href={item[1]} socialId={item[0]} />
            )
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default App;
