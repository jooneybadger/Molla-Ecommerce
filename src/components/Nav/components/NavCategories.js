import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../styles/CommonStyle';

const NavCategories = ({ isModalShop, handleModalShop, goToMain, handleModalProduct }) => {
  return (
    <Fragment>
      <Category>
        <span onClick={() => goToMain()} className='home'>
          HOME
        </span>
      </Category>
      <Category>
        <span onClick={() => handleModalShop()} className='content'>
          SHOP
        </span>
      </Category>
      <Category>
        <span onClick={() => handleModalProduct()} className='content'>
          PRODUCT
        </span>
      </Category>
      <Category>
        <span className='content'>BLOG</span>
      </Category>
      <Category>
        <span className='content'>SIGNUP</span>
      </Category>
    </Fragment>
  );
};

export default NavCategories;

const Category = styled.section`
  display: flex;
  height: 64px;
  padding: 23px 25px;
  position: relative;
  font-size: 20px;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 10px;
    left: 0;
    background-color: ${color.orange};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
    visibility: visible;
    transform: scaleX(1);
  }

  &:hover {
    color: ${color.orange};
    cursor: pointer;
  }

  i {
    margin-left: 7px;
  }

  ${media.lessThan('md')`
    margin: 0px;
    padding: 20px;
  `}
`;
