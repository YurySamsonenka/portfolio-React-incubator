import styled from 'styled-components';

type BlockTitleType = {
  title: string;
};

export const BlockTitle = (props: BlockTitleType) => {
  return <StyledBlockTitle>{props.title}</StyledBlockTitle>;
};

const StyledBlockTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 18px;
`;
