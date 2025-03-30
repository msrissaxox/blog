import React from "react";

export default function PhotoIcon() {
    return (
<div className="flex justify-center">
  <img 
    src='/blog2.jpg' 
    alt="photo icon" 
    className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-md"
  />
</div>
    )
};