import styled from 'styled-components';
import { CardText, CardTitle, StyledCard } from '../card/Card';
import { Icon } from '../../../../componets/icon/Icon';
import { MyTheme } from '../../../../styles/Theme.styled';

export const CustomCard = () => {
  return (
    <StyledCard>
      <CardTitle>advertising</CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi.
      </CardText>
      <Link href='#'>
        ORDER NOW
        <Icon
          iconId="services-arrow"
          width="5px"
          height="7px"
          viewBox="0 0 5 7"
        />
      </Link>
    </StyledCard>
  );
};

const Link = styled.a`
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
