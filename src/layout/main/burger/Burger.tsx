import styled from 'styled-components';
import { MyTheme } from '../../../styles/Theme.styled';

export const Burger = () => {
  return (
    <StyledBurger>
      <Line />
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  height: 15px;
  /* position: absolute; */
  top: 20px;
  display: none;

  @media ${MyTheme.media.largeTablet} {
    display: inline-block;
    margin-top: 35px;
    margin-right: auto;
  }
`;

const Line = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 2px;
  background-color: ${MyTheme.colors.primary};

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${MyTheme.colors.primary};
  }

  &::before {
    content: '';
    top: 8px;
  }

  &::after {
    bottom: 8px;
  }
`;
