import { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const commonContainer = css``;

export const clearFix = css`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;
export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const boxShadow = css`
  box-shadow: 12px 8px 24px rgba(0, 0, 0, 0.2), 4px 8px 8px rgba(0, 0, 0, 0.1),
    0 0 2px rgba(0, 0, 0, 0.24);
`;

export const textNumber = css`
  position: absolute;
  bottom: 0px;
  font-size: 17px;
  font-weight: 900;
  color: #6c6c6c;
`;

export const media = generateMedia({
  xs: '250px',
  sm: '450px',
  md: '768px',
  lg: '1200px',
});

export const theme = {
  fontColor: '#EFA287',
};

export default theme;
