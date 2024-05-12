import styled from 'styled-components';
import { MyTheme } from '../../../styles/Theme.styled';

export const Separator = () => {
  return (
    <StyledSeparator>
      <div></div>
      <div></div>
      <div></div>
    </StyledSeparator>
  );
};

const StyledSeparator = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 70px;
  column-gap: 10px;

  div {
    width: 10px;
    height: 10px;
    background-color: ${MyTheme.colors.primary};
    border-radius: 50%;
  }
`;
