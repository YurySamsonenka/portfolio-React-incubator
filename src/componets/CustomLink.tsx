import styled from 'styled-components';
import { MyTheme } from '../styles/Theme.styled';
import { Icon } from './icon/Icon';

type CustomLinkPropsType = {
  href: string;
  text: string;
};

export const CustomLink = (props: CustomLinkPropsType) => {
  return (
    <StyledCustomLink href="#">
      {props.text}
      <Icon
        iconId="services-arrow"
        width="5px"
        height="7px"
        viewBox="0 0 5 7"
      />
    </StyledCustomLink>
  );
};

const StyledCustomLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 14px;
  color: ${MyTheme.colors.primary};
  column-gap: 5px;
  cursor: pointer;

  svg {
    width: 5px;
    height: 7px;
    transition: transform 0.2s linear;
    fill: currentColor;
  }

  @media (hover: hover) {
    &:hover svg {
      transform: translateX(4px);
    }
  }
`;
