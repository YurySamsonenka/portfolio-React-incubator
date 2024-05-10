import styled from 'styled-components';
import { Title } from '../Title';
import { Description } from '../Description';
import { marginButtom } from '../placeholders';
import { Card } from './card/Card';
import { CustomCard } from './custom-card/CustomCard';

const cards = [
  {
    iconId: 'coding',
    iconWidth: '74px',
    iconHeight: '74px',
    iconViewBox: '0 0 74 74',
    title: 'web development',
    description: 'blog, e-commerce',
  },
  {
    iconId: 'illustration',
    iconWidth: '68px',
    iconHeight: '68px',
    iconViewBox: '0 0 68 68',
    title: 'uI/uX design',
    description: 'blog, e-commerce',
  },
  {
    iconId: 'microphone',
    iconWidth: '74px',
    iconHeight: '74px',
    iconViewBox: '0 0 74 74',
    title: 'sound design',
    description: 'Voice Over, Beat Making',
  },
  {
    iconId: 'development',
    iconWidth: '74px',
    iconHeight: '74px',
    iconViewBox: '0 0 74 74',
    title: 'game design',
    description: 'Character Design, Props & Objects',
  },
  {
    iconId: 'photographer',
    iconWidth: '78px',
    iconHeight: '78px',
    iconViewBox: '0 0 78 78',
    title: 'photography',
    description: 'portrait, product photography',
  },
];

export const Services = () => {
  return (
    <StyledServices id="services">
      <Title> my services</Title>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Description>
      <Cards>
        {cards.map((el, i) => {
          return <Card key={`${el.iconId}${i}`} data={el} />;
        })}
        <CustomCard />
      </Cards>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  ${marginButtom}
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: min(max(19px, 2%), 30px);
`;
