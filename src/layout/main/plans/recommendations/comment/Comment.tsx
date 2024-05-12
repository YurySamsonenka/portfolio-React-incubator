import styled from 'styled-components';
import { MyTheme } from '../../../../../styles/Theme.styled';
import { Icon } from '../../../../../componets/icon/Icon';

type CommentPropsType = {
  data: {
    title: string;
    text: string;
    name: string;
    profession: string;
    image: string;
    stars: boolean[];
  };
};

export const Comment = (props: CommentPropsType) => {
  return (
    <StyledComment>
      <Stars>
        {props.data.stars.map((el, i) => {
          if (el) {
            return (
              <Icon
                key={`star${i}`}
                iconId="star"
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                fill={MyTheme.colors.primary}
              />
            );
          }

          return (
            <Icon
              key={`star${i}`}
              iconId="star"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              fill={MyTheme.colors.dark.secondary}
            />
          );
        })}
      </Stars>
      <Title>{props.data.title}</Title>
      <Text>{props.data.text}</Text>
      <FlexWrapper>
        <Photo src={props.data.image} alt="commentator" />
        <div>
          <UserName>{props.data.name}</UserName>
          <UserProfession>{props.data.profession}</UserProfession>
        </div>
      </FlexWrapper>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  max-width: 310px;
  padding: 25px 31px 25px 17px;
  background-color: ${MyTheme.colors.white};
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 17px;
  column-gap: 10px;
`;

const Title = styled.h3`
  margin-bottom: 17px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
  text-transform: capitalize;
`;

const Text = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  max-height: 120px;
  margin-bottom: 30px;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
  text-transform: capitalize;
`;

const Photo = styled.img`
  display: block;
  margin-right: 13px;
  object-fit: cover;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
`;

const UserProfession = styled.span`
  font-size: 1.5rem;
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
`;
