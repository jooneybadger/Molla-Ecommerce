import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../../styles/CommonStyle';

const ModalShop = ({ isModalShop, modalShop }) => {
  return (
    <Fragment>
      <WrapModal isModalShop={isModalShop}>
        <ModalBox>
          <WrapLeft>
            <WrapStore>
              <h1>Store</h1>
              {modalShop?.store.map((store, idx) => (
                <StoreList key={idx}>{store.branch}</StoreList>
              ))}
            </WrapStore>
            <WrapIntro>
              <h1>Introduce</h1>
              {modalShop?.intro.map((intro, idx) => (
                <Introduction key={idx}>{intro.content}</Introduction>
              ))}
            </WrapIntro>
          </WrapLeft>
          <WrapRight>
            <WrapLocation>
              <h1>Location</h1>
              {modalShop?.location.map((location, idx) => (
                <Location key={idx}>{location.content}</Location>
              ))}
            </WrapLocation>
            <WrapAccount>
              <h1>Account</h1>
              {modalShop?.account.map((account, idx) => (
                <Account key={idx}>{account.content}</Account>
              ))}
            </WrapAccount>
          </WrapRight>
          <CloseButton>
            <i className='fas fa-times'></i>
          </CloseButton>
        </ModalBox>
      </WrapModal>
    </Fragment>
  );
};

export default ModalShop;

const WrapModal = styled.div`
  display: ${(props) => (props.isModalShop ? 'block' : 'none')};
  position: absolute;
  top: 43px;
  left: -45px;
  padding: 40px;
  background-color: ${color.white};
  z-index: 10000;

  h1 {
    font-size: 25px;
    margin-bottom: 16px;
    color: ${color.orange};
  }

  ${media.lessThan('md')`
    left: -175px;
    background-color: ${color.light};  
    padding: 32px;

    h1{
      font-size: 20px;
      margin-bottom : 12px;
    }
  `}
`;

const ModalBox = styled.div`
  display: flex;
`;

const WrapLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 100px;
`;

const WrapStore = styled.div`
  margin-bottom: 20px;
`;

const StoreList = styled.div`
  padding: 8px 5px;
  color: ${color.gray};
  font-size: 14px;
  position: relative;

  ${media.lessThan('md')`
    padding: 6px 4px;
    font-size: 12px;
  `}

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0px;
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
`;

const WrapIntro = styled.div``;

const Introduction = styled(StoreList.withComponent(`div`))``;

const WrapRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 60px;
`;

const WrapLocation = styled.div``;

const Location = styled(StoreList.withComponent(`div`))``;

const WrapAccount = styled.div``;

const Account = styled(StoreList.withComponent(`div`))``;

const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 20px;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
    color: black;
  }
`;
