import styled from 'styled-components';
import { MyTheme } from '../../../../styles/Theme.styled';

type AbilityNamePropsType = {
  name: string;
  value: number;
  rangeId: number;
};

export const AbilityItem = (props: AbilityNamePropsType) => {
  return (
    <StyledAbilityItem>
      <span>{props.name}</span>
      <Value>{props.value}%</Value>
      <Range
        type="range"
        value={`${props.value}`}
        name="range"
        id={`range${props.value}`}
      ></Range>
    </StyledAbilityItem>
  );
};

const StyledAbilityItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Value = styled.span`
  justify-self: end;
`;

const Range = styled.input`
  grid-column: 1/3;
  height: 4px;
  overflow: hidden;
  border-radius: 4px;
  outline: 1.5px solid ${MyTheme.colors.primary};
  outline-offset: 1px;
  pointer-events: none;

  appearance: none;

  &::-webkit-slider-thumb {
    width: 0;
    background-color: ${MyTheme.colors.primary};
    border-radius: 50%;
    box-shadow: -100vmax 100px 0 100vmax ${MyTheme.colors.primary};

    appearance: none;
  }
`;
