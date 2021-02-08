import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme, color, media } from '../../../../styles/CommonStyle';
import { BAN_API } from '../../../../config';
import WhiteBanner from './WhiteBanner';

const WhiteBanners = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(`${BAN_API}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setBanners(res.white_banners));
  }, []);

  return (
    <Fragment>
      <WrapBanners>
        {banners.map((banner, idx) => {
          return <WhiteBanner key={idx} banner={banner} />;
        })}
      </WrapBanners>
    </Fragment>
  );
};

export default WhiteBanners;

const WrapBanners = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${color.lightGray};
`;
