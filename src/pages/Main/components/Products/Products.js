import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { LIST_API } from '../../../../config';
import { theme, color, media } from '../../../../styles/CommonStyle';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState();

  const [feature, setFeature] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [topRated, setTopRated] = useState(false);

  useEffect(() => {
    fetch(`${LIST_API}`, {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.main_list));
  }, []);

  const handleFeature = () => {
    setFeature(true);
    setOnSale(false);
    setTopRated(false);
    fetch(`${LIST_API}`, {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.main_list));
  };

  const handleOnSale = () => {
    setOnSale(true);
    setTopRated(false);
    setFeature(false);
    fetch(`${LIST_API}`, {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((res) =>
        setProducts(
          res.main_list.filter((product) => {
            return product.sale === 'onSale';
          })
        )
      );
  };

  const handleTopRated = () => {
    setTopRated(true);
    setFeature(false);
    setOnSale(false);
    fetch(`${LIST_API}`, {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((res) =>
        setProducts(
          res.main_list.filter((product) => {
            return product.top_rated === 'top';
          })
        )
      );
  };

  return (
    <Fragment>
      <Background>
        <WrapProducts>
          <Categories onSale={onSale} topRated={topRated}>
            <Feature feature={feature} onClick={handleFeature}>
              Featured
            </Feature>
            <OnSale onSale={onSale} onClick={handleOnSale}>
              On SALE
            </OnSale>
            <TopRated topRated={topRated} onClick={handleTopRated}>
              Top Rated
            </TopRated>
          </Categories>
          <WrapProduct onSale={onSale} topRated={topRated}>
            {products?.map((product, idx) => (
              <Product key={idx} product={product} onSale={onSale} topRated={topRated} />
            ))}
          </WrapProduct>
        </WrapProducts>
      </Background>
    </Fragment>
  );
};

export default Products;

const Background = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapProducts = styled.section`
  width: 1280px;
  margin-top: 50px;
`;

const Categories = styled.section`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: ${color.gray};
`;

const Feature = styled.div`
  border-bottom: ${(props) => (props.feature ? `5px solid ${color.gold}` : `none`)};
  padding-bottom: 20px;
  cursor: pointer;
`;

const OnSale = styled(Feature.withComponent('div'))`
  border-bottom: ${(props) => (props.onSale ? `5px solid ${color.gold}` : `none`)};
  margin: 0 50px;
`;

const TopRated = styled(Feature.withComponent('div'))`
  border-bottom: ${(props) => (props.topRated ? `5px solid ${color.gold}` : `none`)};
`;

const WrapProduct = styled.section`
  display: flex;
  justify-content: ${(props) => (props.onSale || props.topRated ? 'flex-start' : 'space-between')};
  margin-top: 50px;
`;
