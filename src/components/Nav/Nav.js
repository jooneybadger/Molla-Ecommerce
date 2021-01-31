/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { NAV_API } from "../../config";
import NavCategories from "../Nav/components/NavCategories";

const Nav = () => {
  const [categories, SetCategories] = useState();

  useEffect(() => {
    fetch(NAV_API, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => SetCategories(res.nav_category));
  }, []);

  console.log(categories);
  return (
    <Fragment>
      <WrapNav>
        <Headers>
          <WrapLogo>
            <img src="/images/logo.png" />
          </WrapLogo>
          <Categories>
            {categories &&
              categories.map((category, idx) => (
                <NavCategories key={idx} id={category.id} content={category.content} />
              ))}
          </Categories>
          <Dropdown>
            <i className="fa fa-search" />
            <i className="fa fa-heart" />
            <i className="fa fa-shopping-cart" />
            <div className="price">$772,00</div>
          </Dropdown>
        </Headers>
      </WrapNav>
    </Fragment>
  );
};

export default Nav;

const WrapNav = styled.section``;

const Headers = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const WrapLogo = styled.div`
  img {
    height: 20px;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 25px;
    margin-right: 10px;
  }
`;
