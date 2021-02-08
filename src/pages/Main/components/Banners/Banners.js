import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/CommonStyle';
import { BAN_API } from '../../../../config';
import Banner from './Banner';

const Banners = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(BAN_API, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setBanners(res.banner_items));
  }, []);

  return (
    <Fragment>
      <WrapBanner>
        {banners.map((banner, idx) => {
          return <Banner key={idx} banner={banner} />;
        })}
      </WrapBanner>
    </Fragment>
  );
};

export default Banners;

const WrapBanner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
