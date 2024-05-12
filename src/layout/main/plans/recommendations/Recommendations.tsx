import styled from 'styled-components';
import { marginButtom } from '../../placeholders';
import { Title } from '../../Title';
import { Description } from '../../Description';
import { Comment } from './comment/Comment';
import img1 from '../../../../assets/images/commentators/Profile1.webp';
import img2 from '../../../../assets/images/commentators/Profile2.webp';
import img3 from '../../../../assets/images/commentators/Profile3.webp';

const comments = [
  {
    title: 'Great Quality!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...',
    name: 'James Gouse',
    profession: 'Graphic Designer',
    image: img1,
    stars: [true, true, true, true, true],
  },
  {
    title: 'Great Quality!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...',
    name: 'James Gouse',
    profession: 'Graphic Designer',
    image: img2,
    stars: [true, true, true, true, true],
  },
  {
    title: 'Great Quality!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...',
    name: 'James Gouse',
    profession: 'Graphic Designer',
    image: img3,
    stars: [true, true, true, true, false],
  },
];

export const Recommendations = () => {
  return (
    <StyledRecommendations id='recommendations'>
      <Title>recommendations</Title>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Description>
      <Comments>
        {comments.map((el, i) => {
          return <Comment key={`comment${i}`} data={el} />;
        })}
      </Comments>
    </StyledRecommendations>
  );
};

const StyledRecommendations = styled.section`
  ${marginButtom}
`;

const Comments = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 21px;
  column-gap: min(max(19px, 2%), 30px);
`;
