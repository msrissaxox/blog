import React from "react";

    //trying to make the pop up come up when the delete button is clicked
export default function Modal({show, onClose, onConfirm}) {
    if(!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full">
        <div className="relative top-40 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm Delete</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">Are you sure you want to delete this post?</p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
    