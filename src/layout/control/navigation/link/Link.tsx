import styled from 'styled-components';
import { MyTheme } from '../../../../styles/Theme.styled';
import { Icon } from '../../../../componets/icon/Icon';

type LinkPropsType = {
  linkData: string;
  myTitle: string;
};

type StyledLinkPropsType = {
  myTitle: string;
};

export const Link = (props: LinkPropsType) => {
  return (
    <StyledLink href={`#${props.linkData}`} myTitle={props.myTitle}>
      <Icon
        iconId={props.linkData}
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
      />
    </StyledLink>
  );
};

const StyledLink = styled.a<StyledLinkPropsType>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${MyTheme.colors.dark.support};
  border-radius: 50%;
  transition: background-color 0.3s linear;

  svg {
    transition: fill 0.3s linear;
    fill: ${MyTheme.colors.dark.secondary};
  }

  /* [mytitle] { */
  &::after {
    content: '';
    position: absolute;
    bottom: calc(100% + 14px);
    transition: 0.1s;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: calc(100%);
    z-index: 100;
    border: 5px solid transparent;
    border-top: 15px solid transparent;
    transition: 0.1s;
  }

  @media (hover: hover) {
    &:hover::after {
      content: '${(props) => props.myTitle}';
      text-transform: capitalize;
      z-index: 100;
      width: min-content;
      padding: 6px 15px 3px 15px;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 15px;
      color: ${MyTheme.colors.white};
      background-color: ${MyTheme.colors.dark.primary};
      border-radius: 2px;
    }

    &:hover::before {
      border-top: 10px solid ${MyTheme.colors.dark.primary};
    }
    /* } */
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${MyTheme.colors.primary};

      & svg {
        fill: ${MyTheme.colors.dark.primary};
      }
    }
  }
`;
