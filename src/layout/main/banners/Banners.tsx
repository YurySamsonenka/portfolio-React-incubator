import styled from 'styled-components';
import {MyTheme} from '../../../styles/Theme.styled';
import {Icon} from '../../../componets/icon/Icon';
import {marginButtom} from '../placeholders';

const banners = ['banner1', 'banner2', 'banner3', 'banner4'];

type PropsType = {
  a: number
  b: number
}

let a = 's';
console.log(a);

const ba: PropsType = {
  a: 1,
  b: 2
};

export const Banners = () => {
  return (
    <StyledBanners>
      {banners.map((el, i) => {
        return (
          <Icon
            key={`${el}${i}`}
            iconId={el}
            width="140px"
            height="140px"
            viewBox="0 0 140 140"
          />
        );
      })}
    </StyledBanners>
  );
};

const StyledBanners = styled.section`
  ${marginButtom};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;
  row-gap: 20px;
  column-gap: min(max(19px, 10%), 100px);

  svg {
    width: 140px;
    height: 140px;
    fill: ${MyTheme.colors.dark.secondary};
  }
`;
