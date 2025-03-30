// This component is the body of the About page. It contains a brief description of the platform and a call to action to contact us.
// The AboutBody component is imported into the About page component and rendered within it.
import React from 'react';
import Link from 'next/link';

export default function AboutBody() {
  return (
    <div className="max-w-2xl mx-auto my-12 px-6 text-center">

    <p className="text-lg text-gray-700 leading-relaxed">
      BackBook is a platform where you can create, edit, and delete blog posts.
      View all your posts in one place, log in, and start sharing your thoughts
      with the world! We are constantly growing and would love you to be a part
      of our journey.
    </p>
    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
      We would love to collaborate and grow with you. Please{" "}
      <Link
        className="text-amber-600 font-semibold hover:text-amber-800 transition-colors duration-200"
        href="/contact"
      >
        contact us
      </Link>{" "}
      to learn more!
    </p>
  </div>
  
  
  );
}
