import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactBody from '../components/ContactBody';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactBody />
      <Footer />
    </div>
  );
}
