import styled from 'styled-components';
import { Icon } from '../../../componets/icon/Icon';
import { MyTheme } from '../../../styles/Theme.styled';

export const ThemeToggler = () => {
  return (
    <StyledThemeToggler htmlFor="theme-toggle">
      <Input type="checkbox" name="checkbox" id="theme-toggle" />
      <Icon
        iconId="dark-theme"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
      />
      <Icon
        iconId="light-theme"
        width="30px"
        height="30px"
        viewBox="0 0 1220 1220"
      />
    </StyledThemeToggler>
  );
};

const StyledThemeToggler = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  #light-theme {
    fill: ${MyTheme.colors.primary};
  }
  #dark-theme {
    fill: ${MyTheme.colors.dark.primary};
  }

  @media ${MyTheme.media.largeTablet} {
    margin-right: 50px;
  }
`;

const Input = styled.input`
  display: none;

  & ~ #light-theme {
    display: none;
  }

  &:checked {
    & ~ #light-theme {
      display: block;
    }

    & ~ #dark-theme {
      display: none;
    }
  }
`;
