import styled from 'styled-components';
import { Icon } from '../../../componets/icon/Icon';
import { MyTheme } from '../../../styles/Theme.styled';

export const Download = () => {
  return (
    <StyledDownload>
      Download CV
      <Icon iconId="download" height="12px" width="13px" viewBox="0 0 11 12" />
    </StyledDownload>
  );
};

const StyledDownload = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-weight: 600;
  line-height: 17px;
  text-transform: uppercase;
  column-gap: 19px;
  background-color: ${MyTheme.colors.primary};
  border: none;
  border-radius: none;
  cursor: pointer;

  svg {
    fill: currentColor;
  }
`;
