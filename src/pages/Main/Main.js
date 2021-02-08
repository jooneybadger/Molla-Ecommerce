import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, theme } from '../../styles/CommonStyle';
import Slider from 'react-slick';
import Banners from './components/Banners/Banners';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <Fragment>
      <Advertise>
        <StyledSlider {...settings}>
          <div className='wrapSlider'>
            <div className='sliderImg'>
              <img className='img1' src='/images/slider/img-1.png' alt='sliderImg' />
            </div>
            <div className='sliderText'>Coat&Jacket</div>
          </div>
          <div className='wrapSlider'>
            <div className='sliderImg'>
              <img className='img2' src='/images/slider/img-2.png' alt='sliderImg' />
            </div>
            <div className='sliderText'>Coat&Jacket</div>
          </div>
        </StyledSlider>
      </Advertise>
      <Banners />
      <Footer />
    </Fragment>
  );
};

export default Main;

const Advertise = styled.section``;

const StyledSlider = styled(Slider)`
  .wrapSlider {
    z-index: 1;
    .sliderImg {
      z-index: 10;
    }
    .sliderText {
      z-index: 100;
    }
  }

  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    height: 700px;
    background-color: #f6f6f6;
    .slick-prev {
      left: 20% !important;
      color: black;
      z-index: 1000;
    }
    .slick-next {
      right: 20% !important;
      color: black;
      z-index: 1000;
    }
  }
`;

const Container = styled.div``;
