import React from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

const Layout = ({ children }) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
);

export default Layout;
