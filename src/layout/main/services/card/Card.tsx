import styled from 'styled-components';
import { MyTheme } from '../../../../styles/Theme.styled';
import { Icon } from '../../../../componets/icon/Icon';

type CardPropsType = {
  data: {
    iconId: string;
    iconWidth: string;
    iconHeight: string;
    iconViewBox: string;
    title: string;
    description: string;
  };
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Icon
        iconId={props.data.iconId}
        width={props.data.iconWidth}
        height={props.data.iconHeight}
        viewBox={props.data.iconViewBox}
      />
      <CardTitle>{props.data.title}</CardTitle>
      <CardText>{props.data.description}</CardText>
    </StyledCard>
  );
};

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  min-height: 225px;
  padding: 25px 25px 33px;
  background-color: ${MyTheme.colors.white};

  & > svg {
    fill: ${MyTheme.colors.primary};
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
  text-transform: capitalize;
`;

export const CardText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  width: 100%;
  max-height: 95px;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: center;
  color: ${MyTheme.colors.dark.secondary};
  text-transform: capitalize;
`;
