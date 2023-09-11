import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" flex justify-between bg-[#202124] text-white py-8 pt-10" style={{ height: '90px' }}>
              <div>
        <p className='text-[white] text-3xl'>Crosby</p>
        </div>
        <div>
            <Link to={"https://www.facebook.com/squarespace"} target='_blank'><i className="fa-brands fa-facebook-f mr-5 text-lg" aria-hidden="true"></i></Link>
            <Link to={"https://www.instagram.com/squarespace/"} target='_blank'><i className='fa-brands fa-instagram mr-5 text-lg' aria-hidden="true"></i></Link>
            <Link to={"https://twitter.com/squarespace" } target='_blank' ><i className='fa-brands fa-twitter pr-10 text-lg' ></i></Link>
        </div>
                 </footer>
  );
};

export default Footer;
