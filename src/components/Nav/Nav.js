import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { media, theme } from '../../styles/CommonStyle';
import { NAV_API } from '../../config';
import NavCategories from '../Nav/components/NavCategories';

const Nav = () => {
  const [categories, SetCategories] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(NAV_API, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => SetCategories(res.nav_category));
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <Fragment>
      <WrapNav>
        <Headers>
          <WrapLogo>
            <img src='/images/logo.png' />
          </WrapLogo>
          <Categories toggle={toggle}>
            {categories &&
              categories.map((category, idx) => (
                <NavCategories key={idx} id={category.id} content={category.content} />
              ))}
          </Categories>
          <Dropdown toggle={toggle}>
            <i className='fa fa-search' />
            <i className='fa fa-heart' />
            <i className='fa fa-shopping-cart' />
            <div className='price'>$772,00</div>
          </Dropdown>
          <Hamburger onClick={handleToggle}>
            <i class='fa fa-bars' aria-hidden='true'></i>
          </Hamburger>
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

  ${media.lessThan('md')`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    padding: 20px 0;
  `};
`;

const WrapLogo = styled.div`
  img {
    height: 20px;
  }

  ${media.lessThan('md')`
    padding-left: 20px;
    
  `}
`;

const Categories = styled.div`
  display: ${(props) => (props.toggle ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;
  font-family: 'PT serif', serif;
  font-size: 16px;
  font-weight: bold;
  color: ${theme.fontColor};

  ${media.lessThan('md')`
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  `};
`;

const Dropdown = styled.div`
  display: ${(props) => (props.toggle ? 'flex' : 'none')};
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  i {
    font-size: 24px;
    margin-right: 20px;
  }

  ${media.lessThan('md')`
    display: ${(props) => (props.toggle ? 'flex' : 'none')};
    justify-content: center;
    width:100%;
    margin-top: 20px;

    i {
      margin: 0px 15px;
    }
  `}
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }

  ${media.lessThan('md')`
    display: block;
  `}
`;
