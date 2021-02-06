import React, { Fragment } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/CommonStyle';

const Banner = ({ banner }) => {
  return (
    <Fragment>
      <WrapBanner>
        <BannerImg src={banner.img_url} />
        <div className='text'>
          <div className='header'>Final reduction</div>
          <div className='body'>Sandal& Flip Flops</div>
          <div className='footer'>Up TO 60% OFF</div>
          <button>Shop now ➔</button>
        </div>
      </WrapBanner>
    </Fragment>
  );
};

export default Banner;

const WrapBanner = styled.div`
  position: relative;

  &:nth-child(2) {
    margin: 0 30px;
  }

  .text {
    position: absolute;
    top: 180px;
    left: 50px;

    .header {
      font-size: 16px;
      color: gray;
    }

    .body {
      width: 120px;
      margin-top: 30px;
      font-size: 24px;
      font-weight: bold;
    }

    .footer {
      margin-top: 12px;
      color:gray;
      font-size: 24px;
      font-family: ${theme.fontFamily};
    }
    
    button {
      margin-top: 30px;
      border: 3px solid ${theme.fontColor};
      font-size: 15px;
      color: ${theme.fontColor};
      background-color: white;
      outline-style:none;
    }
`;

const BannerImg = styled.img``;
