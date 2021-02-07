import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../../styles/CommonStyle';

const ModalProduct = ({ isModalProduct, modalProduct }) => {
  return (
    <Fragment>
      <WrapModal isModalProduct={isModalProduct}>
        <ModalBox>
          <WrapLeft>
            <h1>Category</h1>
            {modalProduct?.map((product, idx) => (
              <Category key={idx}>{product.content}</Category>
            ))}
          </WrapLeft>
          <WrapRight>
            <img src='/images/instagram/1.jpg' alt='' />
          </WrapRight>
          <CloseButton>
            <i class='fas fa-times'></i>
          </CloseButton>
        </ModalBox>
      </WrapModal>
    </Fragment>
  );
};

export default ModalProduct;

const WrapModal = styled.div`
  display: ${(props) => (props.isModalProduct ? 'block' : 'none')};
  position: absolute;
  top: 65px;
  left: -15px;
  background-color: ${color.white};
  z-index: 10000;

  ${media.lessThan('md')`
    left: -133px;
    background-color: ${color.light};
  `}
`;

const ModalBox = styled.div`
  display: flex;
`;

const WrapLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  h1 {
    font-size: 25px;
    margin-bottom: 20px;
    color: ${color.orange};
  }

  ${media.lessThan('md')`
    padding: 32px;
    width: 400px;

    h1 {
      font-size: 20px;
      
    }
  `}
`;

const Category = styled.div`
  position: relative;
  padding: 8px;
  color: ${color.gray};
  font-size: 18px;

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

  ${media.lessThan('md')`
    font-size: 16px;
  `}
`;

const WrapRight = styled.div`
  img {
    height: 100%;
  }

  ${media.lessThan('md')`
    display:none;
  `}
`;

const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: -10px;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  ${media.lessThan('md')`
    right: 20px;  
    font-size: 18px;
  `}

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
    color: black;
  }
`;
