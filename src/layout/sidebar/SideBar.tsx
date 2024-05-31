import styled, {css} from 'styled-components';
import {MyTheme} from '../../styles/Theme.styled';
import {Info} from './info/Info';
import {SocialIcons} from './social-icons/SocialIcons';
import {Status} from './status/Status';
import {AbilitesBlock} from './abilites-block/AbilitesBlock';
import {Download} from './download/Download';
import {ExtraSkills} from './extra-skills/ExtraSkills';
import {Icon} from '../../componets/icon/Icon';
import React, {useState} from 'react';

const itemsAbility = {
  Languages: {
    Bangla: 100,
    English: 80,
    Spanish: 60
  },
  Skills: {
    Html: 90,
    CSS: 85,
    JS: 80,
    PHP: 75,
    WordPress: 85
  }
};

export const SideBar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledSideBar isOpen={menuIsOpen}>
      <CloseBtn onClick={onBurgerBtnClick}>
        <Icon iconId="close" height="23px" width="23px" viewBox="0 0 23 23"/>
      </CloseBtn>
      <Info/>
      <SocialIcons/>
      <Status/>
      {Object.entries(itemsAbility).map((el, i) => {
        return <AbilitesBlock key={i} title={el[0]} itemsAbilites={el[1]}/>;
      })}
      <ExtraSkills/>
      <Download/>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.article<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: right 0.3s linear, left 0.3s linear;
  width: 305px;
  height: fit-content;
  padding: 40px 45px 15px 40px;
  font-size: 1.5rem;
  background-color: ${MyTheme.colors.white};

  @media ${MyTheme.media.largeTablet} {
    position: absolute;
    top: 0;
    z-index: 10;
    right: 100%;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        left: 0;
      `}
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
  display: none;

  svg {
    fill: ${MyTheme.colors.primary};
  }

  @media ${MyTheme.media.largeTablet} {
    display: block;
  }
`;
