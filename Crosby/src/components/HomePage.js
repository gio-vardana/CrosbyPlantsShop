import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyles = styled.div`
  input, h1, h2 {
    font-family: "adobe-garamond-pro";
    font-weight: 400;
    color: white;
  }
`;

const Banner = styled.div`
  background-image: url("https://i.ibb.co/MfB9vTz/banner.jpg");
  background-size: cover;
  height: 780px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 768px) {
    height: 550px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

const BannerTitle = styled.h2`
  font-size: 50px;
  margin-top: 20px;
  

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  padding: 20px 65px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  background-color: rgb(142, 142, 142);
  border: none;
  margin-top: 50px;
  color:#fff;
  z-index:1;
  

  @media (max-width: 768px) {
    padding: 15px 50px;
    font-size: 14px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 40px;
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Center = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const HomePage = () => {
  return (
    <div>
      <GlobalStyles>
            <Banner>
        <BannerTitle>Plants and Pots<br />For Your Home</BannerTitle>
        <Link to="/Shop"><Button>Shop Now</Button></Link>
      </Banner>
          </GlobalStyles>
          <Center>
            <h3 className='text-center text-2xl text-[white]'>Fan Favorites</h3>
           

          </Center>
    </div>
    
          
  );
}

export default HomePage;
