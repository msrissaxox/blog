import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutBody from '../components/AboutBody';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PhotoIcon from '../components/PhotoIcon';

export default function About() {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <PhotoIcon />
      <AboutBody />
      <Footer />
    </div>
  );
}
