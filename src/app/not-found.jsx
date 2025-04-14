'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Uh Oh!</h1>
      <p className="mt-4">
        <Image
          src="/errorimage.png"
          alt="Not Found"
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-md m-20"
        />
        Sorry, the page you are looking for does not exist. Go back to the{' '}
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}
