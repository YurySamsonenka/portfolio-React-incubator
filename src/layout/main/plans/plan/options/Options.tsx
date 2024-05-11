import styled, { css } from 'styled-components';
import { optionsType } from '../Plan';
import { Icon } from '../../../../../componets/icon/Icon';
import { MyTheme } from '../../../../../styles/Theme.styled';

type OptionsPropsType = {
  data: optionsType;
};

type OptionPropsType = {
  select: boolean;
};

export const Options = (props: OptionsPropsType) => {
  return (
    <StyledOptions>
      {Object.entries(props.data).map((el, i) => {
        if (el[1]) {
          return (
            <Option key={i} select={el[1]}>
              <Icon
                iconId="check"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              />
              {el[0]}
            </Option>
          );
        }

        return (
          <Option key={i} select={el[1]}>
            <Icon
              iconId="close"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            />
            {el[0]}
          </Option>
        );
      })}
    </StyledOptions>
  );
};

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
  row-gap: 17px;
  color: ${MyTheme.colors.dark.secondary};
`;

const Option = styled.div<OptionPropsType>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 24px;
  text-transform: capitalize;
  column-gap: 17px;

  svg {
    fill: currentColor;
  }

  ${(props) =>
    props.select &&
    css`
      color: ${MyTheme.colors.dark.primary};

      svg {
        fill: ${MyTheme.colors.primary};
      }
    `}
`;
