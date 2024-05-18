import styled from 'styled-components';
import { ThemeToggler } from './theme-toggler/ThemeToggler';
import { Navigation } from './navigation/Navigation';
import { MyTheme } from '../../styles/Theme.styled';

export const Control = () => {
  return (
    <StyledControl>
      <ThemeToggler />
      <Navigation />
    </StyledControl>
  );
};

const StyledControl = styled.aside`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 108px;
  height: 100vh;
  padding-top: 52px;
  row-gap: 15%;
  background-color: #fafafa;

  @media ${MyTheme.media.largeTablet} {
    align-items: center;
    position: sticky;
    bottom: 0;
    padding: 0 130px;
    flex-direction: row;
    width: auto;
    height: 80px;
  }
`;
