import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme, color, media } from '../../../../styles/CommonStyle';

const Product = ({ product, onSale, topRated }) => {
  const [hoverImage, setHoverImage] = useState(false);
  const [hoverWish, setHoverWish] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);

  const handleImageOver = () => {
    setHoverImage(true);
  };

  const handleImageOut = () => {
    setHoverImage(false);
  };

  const handleWishOver = () => {
    setHoverWish(true);
  };

  const handleWishOut = () => {
    setHoverWish(false);
  };

  const handleCartOver = () => {
    setHoverCart(true);
  };

  const handleCartOut = () => {
    setHoverCart(false);
  };

  return (
    <Fragment>
      <WrapProduct onSale={onSale} topRated={topRated}>
        <WrapImage onMouseOver={handleImageOver} onMouseOut={handleImageOut}>
          <ProductImage
            src={hoverImage ? product.img_url_hovered : product.img_url}
            alt='product-image'
          />
          <AddToCart
            hoverImage={hoverImage}
            onMouseOver={handleCartOver}
            onMouseOut={handleCartOut}
          >
            <WrapCart hoverCart={hoverCart}>
              <i className='fas fa-cart-plus' />
            </WrapCart>
            Add To Cart
          </AddToCart>
          <AddToWish
            hoverImage={hoverImage}
            hoverWish={hoverWish}
            onMouseOver={handleWishOver}
            onMouseOut={handleWishOut}
          >
            <WishText hoverWish={hoverWish}>Add to wishlist</WishText>
            <i className='far fa-heart' />
          </AddToWish>
        </WrapImage>
        <ProductInfo>
          <Category>{product.category}</Category>
          <Name>{product.name}</Name>
          <Price>₩{product.price}</Price>
        </ProductInfo>
      </WrapProduct>
    </Fragment>
  );
};

export default Product;

const WrapProduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${(props) => (props.onSale || props.topRated ? '57.5px' : '0')};
`;

const WrapImage = styled.div`
  position: relative;
`;

const AddToCart = styled.div`
  display: ${(props) => (props.hoverImage ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: ${(props) => (props.hoverWish ? `${color.babypink}` : `rgba(0, 0, 0, 0.9)`)};
  color: ${color.white};
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${color.babypink};
    transition: 0.3s;
  }
`;

const WrapCart = styled.div`
  display: ${(props) => (props.hoverCart ? 'block' : 'none')};
  margin-right: 10px;
`;

const AddToWish = styled.div`
  display: ${(props) => (props.hoverImage ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${(props) => (props.hoverWish ? '180px' : '40px')};
  height: 40px;
  border-radius: ${(props) => (props.hoverWish ? '5px' : '100%')};
  padding: ${(props) => (props.hoverWish ? '10px' : '0px')};
  font-size: 20px;
  background-color: ${color.toneDownBlack};
  color: ${color.white};
  cursor: pointer;

  &:hover {
    background-color: ${color.babypink};
    transition: 0.3s;
  }
`;

const WishText = styled.div`
  display: ${(props) => (props.hoverWish ? 'inline' : 'none')};
  font-size: 12px;
  margin-right: 10px;
`;

const ProductImage = styled.img``;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const Category = styled.div`
  color: ${color.gold};
  font-size: 14px;
`;

const Name = styled.div`
  margin-top: 10px;
`;

const Price = styled.div`
  margin-top: 10px;
`;
