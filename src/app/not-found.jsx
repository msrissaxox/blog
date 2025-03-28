'use client';
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist. Go back to the{" "}
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          homepage
        </Link>.
      </p>
    </div>
  );
}