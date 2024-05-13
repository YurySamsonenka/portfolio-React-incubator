import styled from 'styled-components';
import { Title } from '../Title';
import { MyTheme } from '../../../styles/Theme.styled';

// type TextPropsType = {
//   type: 'text';
//   as?: 'textarea';
//   required?: boolean;
// };

export const Connection = () => {
  return (
    <StyledConnection>
      <Title>Leave us your info</Title>
      <Form action="#">
        <Text>Your Full Name (Required)</Text>
        <Input type="text" required />
        <Text>Your Email (Required)</Text>
        <Input type="text" />
        <Text>Subject</Text>
        <Input type="text" />
        <Text>Your Message</Text>
        <Input as="textarea" />
        <Submit type="submit" value='send message'/>
      </Form>
    </StyledConnection>
  );
};

const StyledConnection = styled.section`
  width: 100%;
  max-width: 570px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ${MyTheme.colors.white};

  textarea {
    resize: none;
    height: 210px;
  }
`;

const Text = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 123.6%;
  color: ${MyTheme.colors.dark.secondary};
`;

const Input = styled.input`
  height: 50px;
  margin-bottom: 25px;
  padding: 10px;
  font-size: 1.8rem;
  background-color: ${MyTheme.colors.dark.support};
  border: none;
  width: 100%;

  &:focus-within {
    outline: 1px solid ${MyTheme.colors.dark.secondary};
  }
`;

const Submit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 10px 25px;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 17px;
  text-transform: uppercase;
  column-gap: 19px;
  background-color: ${MyTheme.colors.primary};
  border: none;
  border-radius: none;
  cursor: pointer;
`;
