import styled from 'styled-components';
import { ThemeToggler } from './theme-toggler/ThemeToggler';
import { Navigation } from './navigation/Navigation';

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
`;
