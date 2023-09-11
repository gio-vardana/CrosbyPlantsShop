import React from 'react';
import Head from './components/Head';
import { Route, Routes } from 'react-router-dom';
import ItemDetailsPage from './components/ItemDetailsPage';
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import OurStory from "./components/OurStory"
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Journal from './components/Journal';
import Contact from './components/Contact';


const App = () => {
  return (
      <div>
      <Head />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route  path='/OurStory' element={<OurStory />}/>
        <Route path='/Journal' element={<Journal />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/cart'>
          <Route index element={<CartPage />} />
          <Route  path='/cart/Payment' element={<Payment />}/>
        </Route>
        <Route path='/Shop'>
          <Route index element={<Shop />}/>
          <Route path='/Shop/:id' element={<ItemDetailsPage />}/>
        </Route>
       
        
      </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
