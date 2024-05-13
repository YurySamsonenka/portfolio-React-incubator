import styled from 'styled-components';
import { Icon } from '../../componets/icon/Icon';
import { MyTheme } from '../../styles/Theme.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Icon iconId="copyring" width="24px" height="24px" viewBox="0 0 24 24" />
      <Copyring>2021 All Rights Reserved.Ojjomedia</Copyring>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  column-gap: 17px;
  background-color: ${MyTheme.colors.white};

  svg {
    width: 24px;
    height: 24px;
    fill: black;
  }
`;

const Copyring = styled.span`
  font-size: 1.5rem;
  line-height: 24px;
`;
