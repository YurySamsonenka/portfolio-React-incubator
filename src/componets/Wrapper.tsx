import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;
  column-gap: min(max(27px, 2%), 30px);
`;
