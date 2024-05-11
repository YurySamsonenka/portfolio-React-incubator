import styled from 'styled-components';
import { marginButtom } from '../placeholders';
import { Title } from '../Title';
import { Description } from '../Description';
import { Plan } from './plan/Plan';

const plans = [
  {
    name: 'silver',
    price: '$0.00',
    description: 'For most businesses that want to optimize web queries',
    popular: false,
    options: {
      'UI Design': true,
      'web development': true,
      'logo design': false,
      'seo optimization': false,
      'wordPress integration': false,
      '5 Websites': false,
      'unlimited user': false,
      '20 gB bandwith': false,
    },
  },
  {
    name: 'gold',
    price: '$50.00',
    description: 'For most businesses that want to optimize web queries',
    popular: true,
    options: {
      'UI Design': true,
      'web development': true,
      'logo design': true,
      'seo optimization': true,
      'wordPress integration': false,
      '5 Websites': false,
      'unlimited user': false,
      '20 gB bandwith': false,
    },
  },
  {
    name: 'dimond',
    price: '$80.00',
    description: 'For most businesses that want to optimize web queries',
    popular: false,
    options: {
      'UI Design': true,
      'web development': true,
      'logo design': true,
      'seo optimization': true,
      'wordPress integration': true,
      '5 Websites': true,
      'unlimited user': true,
      '20 gB bandwith': true,
    },
  },
];

export const Plans = () => {
  return (
    <StyledPlans>
      <Title>Price plans</Title>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Description>
      <FlexWrapper>
        {plans.map((el, i) => {
          return <Plan key={`${el.name}${i}`} data={el} />;
        })}
      </FlexWrapper>
    </StyledPlans>
  );
};

const StyledPlans = styled.section`
  ${marginButtom}
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 21px;
  column-gap: min(max(19px, 2%), 30px);
`;
