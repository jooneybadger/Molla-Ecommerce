import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../../styles/CommonStyle';

const ModalProduct = ({ isModalProduct }) => {
  return (
    <Fragment>
      <WrapModal isModalProduct={isModalProduct}>
        <ModalBox>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
        </ModalBox>
      </WrapModal>
    </Fragment>
  );
};

export default ModalProduct;

const WrapModal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: red;
  top: 64px;
  left: 848px;
  z-index: 10000;
  display: ${(props) => (props.isModalProduct ? 'block' : 'none')};
`;

const ModalBox = styled.div``;
