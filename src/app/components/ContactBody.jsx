'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactBody () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current, 
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          console.log('SUCCESS!');
          //resets the form
          handleSubmission();
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

function handleSubmission() {
  console.log("i was submitted");
  alert("Thank you for your message! We will get back to you soon.");
} 

  return (
    <form ref={form} onSubmit={sendEmail} className="m-15 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            What's your name?
          </label>
          <input 
            type="text" 
            name="name" 
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            What's your email?
          </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Send us a message!
          </label>
          <textarea 
            name="message" 
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
  );
};