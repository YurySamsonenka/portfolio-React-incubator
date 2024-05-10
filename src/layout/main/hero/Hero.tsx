import styled from 'styled-components';
import { MyTheme } from '../../../styles/Theme.styled';
import { Icon } from '../../../componets/icon/Icon';
import img from '../../../assets/images/photo.webp';


export const Hero = () => {
  return (
    <StyledHero id="home">
      <Content>
        <Title>
          I’m Rayan Adlrdard <span>Front-end</span> Developer
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </Text>
        <Link>
          hire me
          <Icon
            iconId="arrow-1"
            height="11px"
            width="11px"
            viewBox="0 0 11 12"
          />
          <Icon
            iconId="arrow-2"
            height="11px"
            width="11px"
            viewBox="0 0 11 12"
          />
        </Link>
      </Content>
      <img src={img} alt="profile" />
    </StyledHero>
  );
};

const StyledHero = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 138px;
  padding: 6px 57px 0 60px;
  row-gap: 20px;
  background-color: ${MyTheme.colors.white};

  img {
    object-fit: cover;
  }
`;

const Content = styled.div`
  max-width: 500px;
  margin-top: 93px;
`;

const Title = styled.h1`
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 48px;
  line-height: 123.6%;

  span {
    color: ${MyTheme.colors.primary};
  }
`;

const Text = styled.p`
  margin-bottom: 25px;
  max-width: 425px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${MyTheme.colors.dark.primary};
  text-transform: uppercase;
  white-space: nowrap;
  background-color: ${MyTheme.colors.primary};
  border-radius: 5px;
  cursor: pointer;

  svg {
    position: relative;
    fill: currentColor;
    transition: opacity 0.3s linear;
  }

  #arrow-1 {
    left: 11px;
  }

  #arrow-2 {
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover {
      #arrow-1 {
        opacity: 0;
      }

      #arrow-2 {
        opacity: 1;
      }
    }
  }
`;
