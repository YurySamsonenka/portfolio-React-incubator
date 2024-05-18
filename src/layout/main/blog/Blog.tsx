import styled from 'styled-components';
import { marginButtom } from '../placeholders';
import { Title } from '../Title';
import { Description } from '../Description';
import { CustomLink } from '../../../componets/CustomLink';
import { MyTheme } from '../../../styles/Theme.styled';
import img1 from '../../../assets/images/portfolio/Image1.webp';
import img2 from '../../../assets/images/portfolio/Image2.webp';
import img3 from '../../../assets/images/portfolio/Image3.webp';

const blogs = [
  {
    title: 'How to make web tempates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    image: img1,
  },
  {
    title: 'make Business card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    image: img2,
  },
  {
    title: 'How to make Flyer Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    image: img3,
  },
];

export const Blog = () => {
  return (
    <StyledBlog id="blog">
      <Title>Blog</Title>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Description>
      <FlexWrapper>
        {blogs.map((el, i) => {
          return (
            <Card key={`blog${i}`}>
              <Image src={el.image} alt="cover" />
              <Content>
                <BlogTitle>{el.title}</BlogTitle>
                <BlogDescription>{el.description}</BlogDescription>
                <CustomLink href="#" text="learn more" />
              </Content>
            </Card>
          );
        })}
      </FlexWrapper>
    </StyledBlog>
  );
};

const StyledBlog = styled.section`
  ${marginButtom}
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 21px;
  column-gap: min(max(19px, 2%), 30px);
`;

const Card = styled.div`
  max-width: 310px;
  background-color: ${MyTheme.colors.white};
`;

const Image = styled.img`
  object-fit: cover;
`;

const Content = styled.div`
  padding: 25px 36px 16px 25px;

  a {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    line-height: 14px;
    text-transform: capitalize;
    column-gap: 9px;

    svg {
      width: 5px;
      height: 7px;
      transform: translate(0px, 2px);
      transition: transform 0.2s linear;
      fill: currentColor;
    }

    @media (hover: hover) {
      &:hover svg {
        transform: translate(4px, 2px);
      }
    }
  }
`;

const BlogTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
  text-transform: capitalize;
`;

const BlogDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 9px;
  overflow: hidden;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
  text-transform: capitalize;
`;
