import styled from 'styled-components';
import { Link } from './link/Link';

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
    <nav>
      <List>
        {links.map((el, i) => {
          return (
            <li>
              <Link key={`${el}${i}`} linkData={el} myTitle={el} />
            </li>
          );
        })}
        {/* <Link  linkData={links[0]} />; */}
      </List>
    </nav>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 43px;
`;
