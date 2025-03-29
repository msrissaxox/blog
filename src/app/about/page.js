import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutBody from '../components/AboutBody';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <AboutBody />
      <Footer />
    </div>
  );
}
