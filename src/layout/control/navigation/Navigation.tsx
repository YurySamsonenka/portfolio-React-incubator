import styled from 'styled-components';
import { Link } from './link/Link';
import { MyTheme } from '../../../styles/Theme.styled';

const links: linkType = [
  'home',
  'services',
  'plans',
  'portfolio',
  'blog',
  'contact',
];

type linkType = string[];

export const Navigation = () => {
  return (
    <StyledNav>
      <List>
        {links.map((el, i) => {
          return (
            <li>
              <Link key={`${el}${i}`} linkData={el} myTitle={el} />
            </li>
          );
        })}
      </List>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  @media ${MyTheme.media.largeTablet} {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 43px;

  @media ${MyTheme.media.largeTablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
