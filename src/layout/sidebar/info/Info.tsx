import styled from 'styled-components';
import { MyTheme } from '../../../styles/Theme.styled';
import img from '../../../assets/images/Profile-mini.webp';

export const Info = () => {
  return (
    <StyledInfo>
      <Image src={img} alt="profile" />
      <Name>Rayan Adlardard</Name>
      <Profession>Font-end Developer</Profession>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 31px;
  object-fit: cover;
`;
const Name = styled.div`
  display: block;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 1.8rem;
`;
const Profession = styled.span`
  color: ${MyTheme.colors.dark.secondary};
`;
