import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './context/CartContext';


const GlobalStyles = styled.div`
  input,
  h1,
  span {
    font-family: "adobe-garamond-pro";
    color: white;
  }
  @media (max-width: 768px) {
    
    
    
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsla( 240,2.608695652173916%,22.54901960784314% ,1);
  height: 70px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
    
  }
`;
const CartInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CartIconSmall = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
`;

const CartCountSmall = styled.span`
  font-size: 14px;
  background-color: hsla(240, 2.608695652173916%, 22.54901960784314%, 1);
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
`;

const NameLink = styled(Link)`
  font-size: 30px;
  color: white;
  font-weight: 400;
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left:98px;


  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202124;
  position: absolute;
  padding-top:30px;
  top: 70px;
  left: ${(props) => (props.isOpen ? '0' : '-100%')};
  width: 100%;
  transition: right 0.3s ease-in-out;
  height:582px;
  padding-top:20px;
  padding-right:60px;
  }

`;

const NavLink = styled(Link)`
  color: white; 
  text-decoration: ${(props) => (props.isSelected ? 'underline' : 'none')};
  font-size: 18px;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  

  @media (max-width: 768px) {
    display: flex;
    padding-left:583px;
    
    
  }
  @media  (max-width: 480px){
    padding-left: 200px;
  }
    
  
`;

const BurgerBar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    transform: translateY(${props => props.isNavOpen ? '8px' : '0'}) rotate(${props => props.isNavOpen ? '45deg' : '0'});
  }

  &:nth-child(2) {
    opacity: ${props => props.isNavOpen ? '0' : '1'};
  }

  &:nth-child(3) {
    transform: translateY(${props => props.isNavOpen ? '-8px' : '0'}) rotate(${props => props.isNavOpen ? '-45deg' : '0'});
  }
`;



const CartIcon = styled(Link)`
  color: white;
  margin-right: 15px;
  text-decoration: none;
`;

const CartCount = styled.span`
  font-size: 14px;
  background-color: hsla( 240,2.608695652173916%,22.54901960784314% ,1);
  color: white;
  border-radius: 50%;
  padding: 5px 8px;
`;
const Socials = styled.div`
display:flex;
color:#fff;
@media (max-width: 768px) {
    display: none;
  }

`;

const Head = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isNavOpen, setNavOpen] = useState(false);
  

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  
};

  return (
    <GlobalStyles>
      <Header>
        <NameLink to="/">Crosby</NameLink>
        <BurgerMenu onClick={handleNavToggle}>
        <BurgerBar className='line' isNavOpen={isNavOpen} />
        <BurgerBar className='line' isNavOpen={isNavOpen} />
        <BurgerBar className='line' isNavOpen={isNavOpen} />

        </BurgerMenu>
        <nav>
          <NavList isOpen={isNavOpen}>
            
            <li><NavLink to="/shop" isSelected={location.pathname.includes("/shop")}>Shop</NavLink></li>
            <li><NavLink to="/OurStory" isSelected={location.pathname.includes("/OurStory")}>Our Story</NavLink></li>
            <li><NavLink to="/Journal" isSelected={location.pathname.includes("/Journal")}>Journal</NavLink></li>
            <li><NavLink to="/Contact" isSelected={location.pathname.includes("/Contact")}>Contact</NavLink></li>
            {isNavOpen && (
               <CartInfo>
                 <CartIconSmall to="/cart">
                  <i className="fa fa-shopping-cart text-xl text-[yellow]" aria-hidden="true"></i>
                 </CartIconSmall>
                 <CartCountSmall>{totalCartQuantity}</CartCountSmall>
               </CartInfo>
             )}
          </NavList>
        </nav>
        <Socials>
            <Link to={"https://www.facebook.com/squarespace"} target='_blank'><i className="fa-brands fa-facebook-f mr-5 text-lg" aria-hidden="true"></i></Link>
            <Link to={"https://www.instagram.com/squarespace/"} target='_blank'><i className='fa-brands fa-instagram mr-5 text-lg' aria-hidden="true"></i></Link>
            <Link to={"https://twitter.com/squarespace" } target='_blank' ><i className='fa-brands fa-twitter pr-10 text-lg' ></i></Link>
        <CartIcon to="/cart">
          <div className="text-center">
            <i className="fa fa-shopping-cart text-xl" aria-hidden="true"></i>
            <CartCount>{totalCartQuantity}</CartCount>
          </div>
        </CartIcon>
        </Socials>
        
      </Header>
    </GlobalStyles>
  );
};

export default Head;