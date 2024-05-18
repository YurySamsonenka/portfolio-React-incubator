import styled from 'styled-components';
import { MyTheme } from '../styles/Theme.styled';

export const WrapperForMain = styled.div`
  display: block;

  @media ${MyTheme.media.largeTablet} {
    position: relative;
    display: grid;
    grid-template-rows: auto auto auto;
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    padding: 0 15px;
    column-gap: min(max(27px, 2%), 30px);
  }
`;
