import React, { Fragment } from 'react';
import styled from 'styled-components';
import { theme, color, media } from '../../../../styles/CommonStyle';

const WhiteBanner = ({ banner }) => {
  return (
    <Fragment>
      <WrapImages>
        <img src={banner.img_url} alt='banner-icon' />
      </WrapImages>
    </Fragment>
  );
};

export default WhiteBanner;

const WrapImages = styled.div``;
