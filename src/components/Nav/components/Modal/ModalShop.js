import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../../styles/CommonStyle';

const ModalShop = ({ isModalShop }) => {
  return (
    <Fragment>
      <WrapModal isModalShop={isModalShop}>
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

export default ModalShop;

const WrapModal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: blue;
  top: 64px;
  left: 743px;
  z-index: 10000;
  display: ${(props) => (props.isModalShop ? 'block' : 'none')};
`;

const ModalBox = styled.div``;
