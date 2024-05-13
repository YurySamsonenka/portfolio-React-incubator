import styled from 'styled-components';
import { Title } from '../Title';
import { SocialIconsLink } from '../../sidebar/social-icons/SocialIcons';
import { MyTheme } from '../../../styles/Theme.styled';
import { Icon } from '../../../componets/icon/Icon';

export const Contact = () => {
  return (
    <StyledContact>
      <Title>Contact information</Title>
      <FlexWrapper>
        <Card>
          <SocialIconsLink as={'div'} key={`Contact${1}`}>
            <Icon
              iconId="location"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
            />
          </SocialIconsLink>
          <Content>
            <Key>Country:</Key>
            <Value>Bangladesh</Value>
            <Key>City:</Key>
            <Value>Dhaka</Value>
            <Key>Streat:</Key>
            <Value>35 vhatara, Badda</Value>
          </Content>
        </Card>
        <Card>
          <SocialIconsLink as={'div'} key={`Contact${2}`}>
            <Icon
              iconId="mail"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
            />
          </SocialIconsLink>
          <Content>
            <Key>Email:</Key>
            <Value as={'a'} href="mailto:youremail@gmail.com">
              youremail@gmail.com
            </Value>
            <Key>Skype:</Key>
            <Value as={'a'} href="skype:@yourusername">
              @yourusername
            </Value>
            <Key>Telegram:</Key>
            <Value as={'a'} href="https://web.telegram.org/">
              @yourusername
            </Value>
          </Content>
        </Card>
        <Card>
          <SocialIconsLink as={'div'} key={`Contact${3}`}>
            <Icon
              iconId="mobile"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
            />
          </SocialIconsLink>
          <Content>
            <Key>Support services:</Key>
            <Value>15369</Value>
            <Key>Office:</Key>
            <Value as={'a'} href="tel:+58021356587235">
              +58 (021)356 587 235
            </Value>
            <Key>Personal:</Key>
            <Value as={'a'} href="tel:+58021356587235">
              +58 (021)356 587 235
            </Value>
          </Content>
        </Card>
      </FlexWrapper>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  width: 100%;
  max-width: 370px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${MyTheme.colors.dark.secondary};
  row-gap: 18px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 15px 25px;
  background-color: ${MyTheme.colors.white};

  ${SocialIconsLink} {
    width: 40px;
    height: 40px;
    align-self: center;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto;
  align-items: center;
  row-gap: 19px;

  a {
    transition: color 0.3s linear;

    @media (hover: hover) {
      &:hover {
        color: ${MyTheme.colors.primary};
      }
    }
  }
`;

const Key = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Value = styled.span`
  justify-self: end;
  font-size: 1.5rem;
  color: ${MyTheme.colors.dark.secondary};
`;
