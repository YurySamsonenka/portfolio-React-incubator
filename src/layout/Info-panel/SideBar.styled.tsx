import styled from 'styled-components';
import { MyTheme } from '../../styles/Theme.styled';
import { SocialLink } from '../../componets/social-link/SocialLink.styled';

export const SideBar = styled.article`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: fit-content;
  padding: 40px 45px 15px 40px;
  font-size: 1.5rem;
  background-color: ${MyTheme.colors.white};

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    padding-bottom: 25px;
    border-bottom: 1.5px solid $support-dark-color;
  }
`;
