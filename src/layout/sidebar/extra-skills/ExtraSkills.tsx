import styled from 'styled-components';
import { Icon } from '../../../componets/icon/Icon';
import { BlockTitle } from '../BlockTitle';
import { MyTheme } from '../../../styles/Theme.styled';
import { buttomLine } from '../placeholders';

const skills = [
  'Bootstrap, Materialize',
  'Stylus, Sass, Less',
  'Gulp, Webpack, Grunt',
  'GIT Knowledge',
];

export const ExtraSkills = () => {
  return (
    <StyledExtraSkills>
      <BlockTitle title="Extra Skills" />
      {skills.map((el, i) => {
        return (
          <Item key={`${el}${i}`}>
            <Icon
              iconId="list-item"
              height="16px"
              width="16px"
              viewBox="0 0 16 16"
              fill="transparent"
            />
            <Text>{el}</Text>
          </Item>
        );
      })}
    </StyledExtraSkills>
  );
};

const StyledExtraSkills = styled.div`
  ${buttomLine}
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    stroke: ${MyTheme.colors.primary};
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Text = styled.div`
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
`;
