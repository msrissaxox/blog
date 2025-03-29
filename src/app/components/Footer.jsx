import React from 'react';

export default function Footer() {
  const d = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-gray-600 sm:justify-start">
              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Marissa Lamothe
              </p>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; {d}
              <span></span> All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
