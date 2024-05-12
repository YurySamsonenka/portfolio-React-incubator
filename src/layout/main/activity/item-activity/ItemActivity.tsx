import styled from 'styled-components';
import { MyTheme } from '../../../../styles/Theme.styled';
import { workstationType } from '../Activity';

type ItemActivityPropsType = {
  data: workstationType;
};

export const ItemActivity = (props: ItemActivityPropsType) => {
  return (
    <StyledItemActivity>
      <GridWrapper>
        <Place>{props.data.name}</Place>
        <Status>{props.data.humanStatus}</Status>
        <Period>{props.data.periodActivity}</Period>
      </GridWrapper>
      <FlexWrapper>
        <Certificate>{props.data.certificate}</Certificate>
        <Discription>{props.data.description}</Discription>
      </FlexWrapper>
    </StyledItemActivity>
  );
};

const StyledItemActivity = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: min(max(27px, 2%), 30px);

  &:not(:last-child) {
    padding-bottom: 10px;
    border-bottom: 1.5px solid ${MyTheme.colors.dark.support};
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: fit-content;
  row-gap: 25px;
  column-gap: 21px;
`;

const Place = styled.span`
  grid-column: 1/3;
  min-width: 208px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
`;

const Status = styled.span`
  font-size: 1.5rem;
  line-height: 24px;
`;

const Period = styled.span`
  justify-self: center;
  align-self: center;
  padding: 4px 7px;
  line-height: 100.9%;
  color: ${MyTheme.colors.white};
  background-color: ${MyTheme.colors.primary};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 536px;
  row-gap: 28px;
`;

const Certificate = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
`;

const Discription = styled.p`
  font-size: 1.5rem;
  line-height: 24px;
  color: ${MyTheme.colors.dark.secondary};
`;
