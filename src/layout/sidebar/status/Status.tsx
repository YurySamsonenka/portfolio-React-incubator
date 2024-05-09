import styled from 'styled-components';
import { buttomLine } from '../placeholders';
import { MyTheme } from '../../../styles/Theme.styled';

type itemType = {
  Age: number;
  Residence: string;
  Freelance: string;
  Address: string;
};

const items: itemType = {
  Age: 24,
  Residence: 'DB',
  Freelance: 'Available',
  Address: 'Dhaka, Bangladesh',
};

export const Status = () => {
    return (
    <StyledStatus>
      {Object.entries(items).map((el, index) => {
        return (
          <StatusItem key={index}>
            <StatusName>{el[0]}:</StatusName>
            <span>{el[1]}</span>
          </StatusItem>
        );
      })}
    </StyledStatus>
  );
};

const StyledStatus = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  ${buttomLine}
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusName = styled.div`
  padding: 0 8px 0 5px;
  background-color: ${MyTheme.colors.primary};
`;
