import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/CommonStyle';

const NavCategories = ({ content, id }) => {
  return (
    <Fragment>
      <Category>{content}</Category>
    </Fragment>
  );
};

export default NavCategories;

const Category = styled.section`
  display: flex;
  margin: 0px 14px;

  ${media.lessThan('md')`
    margin: 0px;
    padding: 20px;
  `}
`;
