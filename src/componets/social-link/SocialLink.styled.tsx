import styled from 'styled-components';
import { MyTheme } from '../../styles/Theme.styled';
import { Icon } from '../icon/Icon.styled';

type SocialLinkPropsType = {
  href: string;
  socialId: string;
};

export const SocialLink = (props: SocialLinkPropsType) => (
  <StyledLink href={props.href} target="_blank" rel="noreferrer">
    <Icon
      iconId={props.socialId}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={MyTheme.colors.dark.primary}
    />
  </StyledLink>
);

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${MyTheme.colors.primary};
  border-radius: 50%;
`;
