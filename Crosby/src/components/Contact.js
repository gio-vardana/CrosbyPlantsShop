import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Contact = () => {

  const Banner = styled.div`
   background-image: url("/plant-textures-2.jpg");
   background-position: center;
   background-size:cover;
   height:768px;
  `;
   const H1 = styled.h1`
   color:#fff;
   font-size:55px;
   font-weight:200;
   text-align:center;
   padding-top:80px;
   `;
    const Text = styled.p`
    color:#fff;
    text-align:center;
    font-size:18px;
    padding-top:20px;
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
  `;
  
  return (
    <div>
      <Banner>
        <H1>Contact Us</H1>
        <Text>The following text is placeholder known as “lorem ipsum,” which is scrambled <br></br>Latin used by designers to mimic real copy. </Text>
        <div className='flex justify-center'>
        <Link to="/Shop"><Button>Shop Now</Button></Link>
        </div>

      </Banner>
          
    </div>
  );
};

export default Contact;
