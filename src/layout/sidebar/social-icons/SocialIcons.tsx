import styled from 'styled-components';
import { buttomLine } from '../placeholders';
import { Icon } from '../../../componets/icon/Icon';
import { MyTheme } from '../../../styles/Theme.styled';

type socialType = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  dribbble?: string;
};

const social: socialType = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
  linkedin: 'https://ru.linkedin.com/',
  youtube: 'https://www.youtube.com/',
  dribbble: 'https://dribbble.com/',
};

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      {Object.entries(social).map((el, index) => {
        return (
          <li>
            <SocialIconsLink key={index} href={el[1]} target="_blank" rel="noreferrer">
              <Icon
                iconId={el[0]}
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
              />
            </SocialIconsLink>
          </li>
        );
      })}
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  ${buttomLine}
`;
export const SocialIconsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${MyTheme.colors.primary};
  border-radius: 50%;

  svg {
    fill: ${MyTheme.colors.dark.primary};
  }
`;
