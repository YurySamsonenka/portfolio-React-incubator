import styled from 'styled-components';
import { MyTheme } from '../../styles/Theme.styled';
import { Info } from './info/Info';
import { SocialIcons } from './social-icons/SocialIcons';
import { Status } from './status/Status';
import { Ability } from './ability/Ability';

// export type itemsAbilityType = {
//   Languages: {
//     Bangla: number;
//     English: number;
//     Spanish: number;
//   };
//   Skills: {
//     Html: number;
//     CSS: number;
//     JS: number;
//     PHP: number;
//     WordPress: number;
//   };
// };


const itemsAbility = {
  Languages: {
    Bangla: 100,
    English: 80,
    Spanish: 60,
  },
  Skills: {
    Html: 90,
    CSS: 85,
    JS: 80,
    PHP: 75,
    WordPress: 85,
  },
};

// console.log(Object.entries(itemsAbility));

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Info />
      <SocialIcons />
      <Status />
      {Object.entries(itemsAbility).map((el, i) => {
        return <Ability key={i} title={el[0]} itemsAbilites={el[1]} />;
      })}
    </StyledSideBar>
  );
};

const StyledSideBar = styled.article`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: fit-content;
  padding: 40px 45px 15px 40px;
  font-size: 1.5rem;
  background-color: ${MyTheme.colors.white};
`;


// const Topic = () => (
//   <StyledTopic>
//     <div>Languages</div>
//     <div>
//       <span>Bangla</span>
//       <span>100%</span>
//       <input type="range" value="100" name="range" id="range1" />
//     </div>
//     <div>
//       <span>English</span>
//       <span>80%</span>
//       <input type="range" value="80" name="range" id="range2" />
//     </div>
//     <div>
//       <span>Spanish</span>
//       <span>60%</span>
//       <input type="range" value="60" name="range" id="range3" />
//     </div>
//   </StyledTopic>
// );

// const StyledTopic = styled.div``;
