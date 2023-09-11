import React from 'react';
import styled from 'styled-components';

const Journal = () => {

    const Banner = styled.div`
      background-color: hsla( 240,2.608695652173916%,22.54901960784314% ,1);
      height:768px;
      display:flex;
      justify-content:center;
      gap:30px;
      padding-top:78px;

    `;
    const Image1 = styled.image`
      background-image:url("/plant_1_optimized.gif");
      background-size:cover;
      background-position:center;
      height:395px;
      width:550px;
      
    `;
    const Image2 = styled.div`
      background-image:url("/plant_2_optimized.gif");
      background-size:cover;
      background-position:center;
      height:395px;
      width:550px;
      
    `;
    const Text = styled.p`
    color:#fff;
    font-size:18px;
    padding-top:25px;

    `;
    const ImageCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    `;
    const BannerText = styled.h1`
     font-size:45px;
     font-weight:200;
     color:#fff;
     padding-top:25px;
    `;
  
  return (
    <div>
      <Banner>
        <ImageCont>
           <Image1 />
          <Text>6/6/19</Text>
          <BannerText>Is It Flowers You’re After?</BannerText>
          </ImageCont>
        <ImageCont>
          <Image2 />
          <Text>6/6/2023</Text>
          <BannerText>Searching for Succulents?</BannerText>
        </ImageCont>
        
      
      </Banner>
          
    </div>
  );
};

export default Journal;
