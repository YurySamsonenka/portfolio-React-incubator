import styled from 'styled-components';
import { marginButtom } from '../placeholders';

export const Map = () => {
  return (
    <StyledMap>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc5d0d1866369f978bf8381f331dd19589a782c3d7f8873d672639ac1a47fb5b&amp;source=constructor&amp;lang=en_US"
        width="100%"
        height="300"
        frameBorder="0"
      ></iframe>
    </StyledMap>
  );
};

const StyledMap = styled.section`
  ${marginButtom}
`;
