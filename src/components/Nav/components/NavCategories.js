import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../styles/CommonStyle';
import { NAV_API } from '../../../config';
import ModalShop from '../components/Modal/ModalShop';
import ModalProduct from '../components/Modal/ModalProduct';

const NavCategories = ({
  isModalShop,
  isModalProduct,
  handleModalShop,
  handleModalProduct,
  openLogin,
  closeModal,
  goToMain,
}) => {
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    fetch(NAV_API, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setModalData(res));
  }, []);

  return (
    <Fragment>
      <Category>
        <Content onClick={() => goToMain()}>HOME</Content>
      </Category>
      <Category onClick={() => handleModalShop()}>
        <Content>
          SHOP
          <ModalShop modalShop={modalData.modal_shop} isModalShop={isModalShop} />
        </Content>
      </Category>
      <Category onClick={() => handleModalProduct()}>
        <Content>PRODUCT</Content>
        <ModalProduct modalProduct={modalData.modal_category} isModalProduct={isModalProduct} />
      </Category>
      <Category>
        <Content onClick={closeModal}>BLOG</Content>
      </Category>
      <Category>
        <Content onClick={openLogin}>LOGIN</Content>
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

const Content = styled.div`
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
`;
