import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactBody from '../components/ContactBody';
import NavBar from '../components/NavBar';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactBody />
    </div>
  );
}
