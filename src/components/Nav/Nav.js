import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { media, theme } from '../../styles/CommonStyle';
import { NAV_API } from '../../config';
import { useHistory } from 'react-router-dom';
import NavCategories from '../Nav/components/NavCategories';
import Login from '../Nav/components/Login/Login';

const Nav = (props) => {
  const history = useHistory();
  const [categories, SetCategories] = useState();
  const [toggle, setToggle] = useState(false);
  const [isModalShop, setIsModalShop] = useState(false);
  // const [isModalProduct, setIsModalProduct] = useState(false);
  const [login, setLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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

  const handleModalShop = () => {
    setIsModalShop(!isModalShop);
    // setIsModalProduct(false);
  };

  const handleModalProduct = () => {
    // setIsModalProduct(!isModalProduct);
    setIsModalShop(false);
    history.push('/lists');
  };

  const openLogin = () => {
    setLogin(!login);
    closeModal();
    console.log(login);
  };

  const closeLogin = () => {
    setLogin(false);
    console.log(login);
  };

  const closeModal = () => {
    // setIsModalProduct(false);
    setIsModalShop(false);
  };

  const goToMain = () => {
    history.push('/');
    closeModal();
  };

  return (
    <Fragment>
      <Login closeLogin={closeLogin} login={login} />
      <WrapNav>
        <Headers>
          <WrapLogo onClick={goToMain}>
            <img src='/images/logo.png' />
          </WrapLogo>
          <Categories toggle={toggle}>
            <NavCategories
              isModalShop={isModalShop}
              // isModalProduct={isModalProduct}
              handleModalShop={handleModalShop}
              handleModalProduct={handleModalProduct}
              openLogin={openLogin}
              closeModal={closeModal}
              goToMain={goToMain}
            />
          </Categories>
          <Dropdown toggle={toggle}>
            <i className='fas fa-search'></i>
            <i className='far fa-heart'></i>
            <i className='fas fa-shopping-cart'></i>
            {isLogin ? <div className='price'>$772,00</div> : ''}
          </Dropdown>
          <Hamburger onClick={handleToggle}>
            <i className='fa fa-bars' aria-hidden='true'></i>
          </Hamburger>
        </Headers>
      </WrapNav>
    </Fragment>
  );
};

export default Nav;

const WrapNav = styled.section`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Headers = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1280px;

  ${media.lessThan('md')`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    padding: 20px 0;
  `};
`;

const WrapLogo = styled.div`
  &:hover {
    cursor: pointer;
  }

  img {
    height: 20px;
  }

  ${media.lessThan('md')`
    padding-left: 20px;
    
  `}
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;

  ${media.lessThan('md')`
    display: ${(props) => (props.toggle ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  `};
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;

  i {
    margin-right: 30px;
  }

  .fa-heart {
    color: red;
    font-weight: bold;
  }

  .fa-shopping-cart {
    margin-right: 15px;
  }

  .price {
    padding-bottom: 5px;
    font-size: 18px;
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
