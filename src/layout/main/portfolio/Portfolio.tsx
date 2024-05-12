import styled from 'styled-components';
import { marginButtom } from '../placeholders';
import { Title } from '../Title';
import { Description } from '../Description';
import { MyTheme } from '../../../styles/Theme.styled';
import img1 from '../../../assets/images/portfolio/Image1.webp';
import img2 from '../../../assets/images/portfolio/Image2.webp';
import img3 from '../../../assets/images/portfolio/Image3.webp';
import img4 from '../../../assets/images/portfolio/Image4.webp';
import img5 from '../../../assets/images/portfolio/Image5.webp';
import img6 from '../../../assets/images/portfolio/Image6.webp';
import img7 from '../../../assets/images/portfolio/Image7.webp';
import img8 from '../../../assets/images/portfolio/Image8.webp';
import img9 from '../../../assets/images/portfolio/Image9.webp';
import { Icon } from '../../../componets/icon/Icon';

const tags = [
  'All categories',
  'UI Design',
  'Web Templates',
  'Logo',
  'Branding',
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const Portfolio = () => {
  return (
    <StyledPortfolio id="portfolio">
      <Title>Portfolio</Title>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Description>
      <Tags>
        {tags.map((el, i) => {
          if (i === 0) {
            return (
              <div key={`${el}${i}`}>
                <input
                  type="radio"
                  name="radio"
                  id={`tag-radio${i}`}
                  checked={i === 0}
                />
                <label htmlFor={`tag-radio${i}`}>{el}</label>
              </div>
            );
          }

          return (
            <div key={`${el}${i}`}>
              <input type="radio" name="radio" id={`tag-radio${i}`} />
              <label htmlFor={`tag-radio${i}`}>{el}</label>
            </div>
          );
        })}
      </Tags>
      <Projects>
        {images.map((el, i) => {
          return (
            <Link key={`image${i}`} href="#">
              <Image src={el} alt="project" />
              <Wrapper>
                <Icon
                  iconId="close"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                />
              </Wrapper>
            </Link>
          );
        })}
      </Projects>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`
  ${marginButtom}
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  row-gap: 10px;
  column-gap: 37px;

  input {
    display: none;

    &:checked + label {
      color: ${MyTheme.colors.primary};
    }
  }

  label {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 123.6%;
    cursor: pointer;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: min(max(19px, 2%), 30px);
`;

const Link = styled.a`
  position: relative;

  @media (hover: hover) {
    &:hover div {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 180, 0, 0.949);
  opacity: 0;
  transition: opacity 0.2s linear;

  svg {
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    fill: ${MyTheme.colors.dark.primary};
  }
`;
