import styled from 'styled-components';
import { MyTheme } from '../../styles/Theme.styled';

export const Description = styled.p`
  max-width: 438px;
  margin: 0 auto;
  margin-bottom: 50px;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: center;
  color: ${MyTheme.colors.dark.secondary};
`;
