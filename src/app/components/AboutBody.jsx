import React from 'react';
import Link from 'next/link';

export default function AboutBody() {
  return (
    <div className="m-10">
      <p>
        Welcome to BackBook, a platform that allows you to create, edit, and
        delete blog posts. You can also view all of your blog posts in one
        place. Log in and create posts to share with the world! We are
        constantly growing and would love you to be a part of our journey!
      </p>
      <p>
        <>
          We would love to collaborate and grow with you. Please{' '}
          <Link className="text-amber-600 hover:text-amber-800" href="/contact">
            contact us
          </Link>{' '}
        </>
        to learn more!
      </p>
    </div>
  );
}
