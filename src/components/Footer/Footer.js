import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../styles/CommonStyle';

const Footer = () => {
  return (
    <Fragment>
      <WrapInsta>
        <h1>FOLLOW US ON INSTAGRAM</h1>
        <p>Wanna share your style with us?</p>
        <Instagram>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/1.jpg' alt='instaImg' />
          </div>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/2.jpg' alt='instaImg' />
          </div>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/3.jpg' alt='instaImg' />
          </div>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/4.jpg' alt='instaImg' />
          </div>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/5.jpg' alt='instaImg' />
          </div>
          <div className='image'>
            <div className='likes'>
              <i className='far fa-heart'></i>
              <span>246 </span>
              <i className='far fa-comments'></i>
              <span>72</span>
            </div>
            <img src='/images/instagram/6.jpg' alt='instaImg' />
          </div>
        </Instagram>
      </WrapInsta>
      <WrapFooter>
        <WrapFooterMain>
          <LeftContainer>
            <img src='/images/logo-footer.png' alt='logo' />
            <div className='introduction'>
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
              magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
              porttitor, facilisis luctus, metus.
            </div>
            <div className='contact'>
              <div className='call'>
                <div className='question'>Got Question? Call us 24/7</div>
                <div className='phone'>+0123 456 789</div>
              </div>
              <div className='card'>
                <div className='payment'>Payment Method</div>
                <div className='cardImages'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg'
                    alt='visa'
                  />
                  <img
                    src='https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg'
                    alt='master'
                  />
                  <img
                    src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png'
                    alt='paypal'
                  />
                  <img
                    src='https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2018/04/10121846/am_amex_06.jpg'
                    alt='express'
                  />
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9BXWZYuOK4f24XpLGLUBpgS0hEbX8aSS3-6CsG9eTfH8rhyMKrAll7Iq8ZTXPzVRpp6j9A&usqp=CAU&ec=45771803'
                    alt='visa'
                  />
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1024px-Apple_Pay_logo.svg.png'
                    alt='apple'
                  />
                </div>
              </div>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className='categories'>
              <h1>information</h1>
              <div className='category'>About Molla</div>
              <div className='category'>How to shop on Molla</div>
              <div className='category'>FAQ</div>
              <div className='category'>Contact Us</div>
              <div className='category'>Log in</div>
            </div>
            <div className='categories'>
              <h1>customer service</h1>
              <div className='category'>Payment Methods</div>
              <div className='category'>Money-back gurantee!</div>
              <div className='category'>Returns</div>
              <div className='category'>Shipping</div>
              <div className='category'>Terms and conditions</div>
              <div className='category'>Privacy Policy</div>
            </div>
            <div className='categories'>
              <h1>my account</h1>
              <div className='category'>Sign in</div>
              <div className='category'>View Cart</div>
              <div className='category'>My Wishlist</div>
              <div className='category'>Track My Order</div>
              <div className='category'>Help</div>
            </div>
          </RightContainer>
        </WrapFooterMain>
        <WrapFooterBottom>
          <div className='copyright'>
            Copyright © 2019 Molla Store. All Rights Reserved. Terms Of Use Privacy Policy
          </div>
          <div className='social'>
            <span>Social Media</span>
            <img
              src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
              alt=''
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png'
              alt=''
            />
            <img
              src='https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png'
              alt=''
            />
            <img
              src='https://i.pinimg.com/originals/62/60/ef/6260efc8fc9a9002669d2f4ad9956cc0.jpg'
              alt=''
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mzLN3yJHrVAPKBCc82wo8fqDjuZQIBa66cdovFrZfSjuYUeVldBBXunnX-EontSH_Y0L8w&usqp=CAU&ec=45771803'
              alt=''
            />
          </div>
        </WrapFooterBottom>
        <GoToTop href='#top'>Top⬆︎</GoToTop>
      </WrapFooter>
    </Fragment>
  );
};

export default Footer;

const WrapInsta = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;

  h1 {
    margin: 30px 0;
    font-size: 25px;
    font-weight: bold;
  }

  p {
    margin-bottom: 30px;
    font-size: 14px;
    color: ${color.gray};
  }
`;

const Instagram = styled.section`
  display: flex;
  justify-content: center;
  .image {
    position: relative;

    .likes {
      position: absolute;
      top: 95px;
      left: 55px;
      display: none;
    }

    &:hover {
      display: block;
      opacity: 0.7;
      cursor: pointer;

      .likes {
        display: block;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const WrapFooter = styled.section`
  position: relative;
  background-color: ${color.toneDownBlack};
  padding: 0 10px;
`;

const WrapFooterMain = styled.section`
  padding: 60px 0 50px;
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 10px;
  margin-bottom: 40px;
  color: ${color.gray};

  img {
    width: 82px;
    height: 20px;
    margin-bottom: 20px;
  }

  .introduction {
    margin-bottom: 32px;
  }

  .contact {
    display: flex;
    flex-direction: row;
    font-size: 14px;

    .call {
      color: ${color.white};
      margin-right: 60px;

      .phone {
        color: ${color.orange};
        font-size: 24px;
      }
    }

    .card {
      color: ${color.white};

      .cardImages {
        margin-top: 10px;

        img {
          width: 30px;
          height: 20px;
          margin-right: 20px;
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  .category {
    padding: 7px 0;
    color: ${color.gray};
    font-size: 14px;
  }

  h1 {
    color: ${color.white};
    margin-bottom: 19px;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .categories {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    margin-right: 20px;
  }
`;

const WrapFooterBottom = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 0.5px solid ${color.gray};
  color: ${color.gray};
  font-size: 14px;

  .social {
    span {
      margin: 0 10px 3px 0;
    }
    img {
      width: 15px;
      height: 15px;
      margin-right: 20px;
    }
  }
`;

const GoToTop = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  right: 30px;
  width: 40px;
  height: 40px;
  background-color: ${color.light};
  color: ${color.gray};
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 3px;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
