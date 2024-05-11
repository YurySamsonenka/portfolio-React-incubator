import styled, { css } from 'styled-components';
import { MyTheme } from '../../../../styles/Theme.styled';
import { Options } from './options/Options';

type PlanPropsType = {
  data: {
    name: string;
    price: string;
    description: string;
    popular: boolean;
    options: optionsType;
  };
};

type StyledPlanPropsType = {
  popular: boolean;
};

export type optionsType = {
  'UI Design': boolean;
  'web development': boolean;
  'logo design': boolean;
  'seo optimization': boolean;
  'wordPress integration': boolean;
  '5 Websites': boolean;
  'unlimited user': boolean;
  '20 gB bandwith': boolean;
};

export const Plan = (props: PlanPropsType) => {
  return (
    <StyledPlan popular={props.data.popular}>
      <Popular>most popular</Popular>
      <Name>{props.data.name}</Name>
      <Price>
        <span>{props.data.price}</span> /hour
      </Price>
      <Description>{props.data.description}</Description>
      <Options data={props.data.options} />
      <Link href="#">ORDER NOW</Link>
    </StyledPlan>
  );
};

const StyledPlan = styled.div<StyledPlanPropsType>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 310px;
  padding: 55px 31px 25px;
  background-color: ${MyTheme.colors.white};

  ${(props) =>
    props.popular &&
    css`
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

      ${Popular} {
        opacity: 1;
      }

      ${Link} {
        background-color: ${MyTheme.colors.primary};
      }
    `}
`;

const Popular = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
  line-height: 24px;
  text-transform: capitalize;
  background-color: ${MyTheme.colors.primary};
  opacity: 0;
`;

const Name = styled.div`
  margin-bottom: 19px;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 123.6%;
  text-align: center;
  text-transform: capitalize;
`;

const Price = styled.div`
  margin-bottom: 9px;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  span {
    display: inline-block;
    margin-right: 10px;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 123.6%;
  }
`;

const Description = styled.p`
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: center;
  color: ${MyTheme.colors.dark.secondary};
  text-transform: capitalize;
`;

const Link = styled.a`
  align-self: center;
  padding: 11px 41px 11px;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 17px;
  color: ${MyTheme.colors.dark.primary};
  background-color: ${MyTheme.colors.white};
  border-radius: 30px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
`;
