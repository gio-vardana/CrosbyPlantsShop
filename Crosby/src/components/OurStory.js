import React from 'react';
import styled from 'styled-components';

const OurStory = () => {

    const Container = styled.div`
    background-image:url("/plant-textures-2.jpg");
    height:768px;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    `
    const Text = styled.h1`
    padding-top:90px;
    text-align:center;
    color:#fff;
    font-size:30px;
    `
  
  return (
    <Container>
      <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui<br></br> blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias<br></br> excepturi sint occaecati cupiditate non provident.</Text>
    </Container>
  
  );
};

export default OurStory;
