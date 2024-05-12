import styled from 'styled-components';
import { marginButtom } from '../placeholders';
import { Title } from '../Title';
import { Description } from '../Description';
import { MyTheme } from '../../../styles/Theme.styled';
import { ItemActivity } from './item-activity/ItemActivity';

type ActivityPropsType = {
  data: {
    title: string;
    description: string;
    workstation: workstationType[];
  };
};

export type workstationType = {
  name: string;
  humanStatus: string;
  periodActivity: string;
  certificate: string;
  description: string;
};

export const Activity = (props: ActivityPropsType) => {
  return (
    <StyledActivity >
      <Title>{props.data.title}</Title>
      <Description>{props.data.description}</Description>
      <ListActivites>
        {props.data.workstation.map((el, i) => {
          return <ItemActivity key={`activity${i}`} data={el} />;
        })}
      </ListActivites>
    </StyledActivity>
  );
};

const StyledActivity = styled.section`
  ${marginButtom}
`;

const ListActivites = styled.div`
  display: flex;
  flex-direction: column;
  padding: 47px 29px 38px 37px;
  row-gap: 28px;
  background-color: ${MyTheme.colors.white};
`;
