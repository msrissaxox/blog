import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactBody from '../components/ContactBody';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PhotoIcon from '../components/PhotoIcon';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <PhotoIcon />
      <ContactBody />
      <Footer />
    </div>
  );
}
