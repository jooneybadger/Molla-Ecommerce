import React, { Fragment } from "react";
import styled from "styled-components";

const NavCategories = ({ content, id }) => {
  console.log(content);

  return (
    <Fragment>
      <Category>{content}</Category>
    </Fragment>
  );
};

export default NavCategories;

const Category = styled.div`
  margin-right: 30px;
`;
