//Blog card component is a functional component that displays a single blog post.
//It takes a post object as a prop and displays the post title, content, date, and cover photo.
//The post object is destructured in the BlogCard component to access the properties.
//The post object has the following properties: userName, content, title, date, and fileUpload.

//The expandButton function is called when the expand button is clicked.
//The expandButton function toggles the isExpanded state between true and false.
//The isExpanded state is used to determine whether the post content should be expanded or collapsed.
//The post content is displayed conditionally based on the isExpanded state.
//The onDelete function is called when the delete button is clicked.

//post is from the parent component called BlogForm
//onDelete is from the parent component called BlogForm

'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// console.log("data", { userName, content, title, date, fileUpload });
export default function BlogCard({ post, onDelete, onEdit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // const base64Image = post.fileUpload ? `data:image/gif;base64,${post.fileUpload}` : '/javascript.jpg';
  const base64Image = post?.fileUpload || '/javascript.jpg';
  //this handles the file upload and sets the fileUpload state to the base64 encoded image string
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const dataURL = reader.result;
    setPost((prevPost) => ({
      ...prevPost,
      fileUpload: dataURL,
    }));
    
};
if (file) {
  reader.readAsDataURL(file);
}
};

  //function to expand the content of the post
  function expandButton() {
    console.log('Expand button clicked');
    //sets the state of isExpanded to the opposite of what it currently is
    setIsExpanded(!isExpanded);
  }

  function deleteButton() {
    console.log('Delete button clicked');
    onDelete();
  }

  function editButton() {
    console.log('Edit button clicked');
    onEdit();
  }



  console.log('BlogCard post:', post);
  // Check if the post object is valid
  if (!post || Object.keys(post).length === 0) {
    return null;
  }

  return (
    <article className="flex flex-col sm:flex-row bg-white transition hover:shadow-xl mb-3 px-6 py-6 sm:px-6 sm:py-8">
      {/* <div className="rotate-180 p-2 [writing-mode:_vertical-lr]"> */}
      <div className="p-2 sm:rotate-180 sm:[writing-mode:_vertical-lr]">
        <time
          dateTime={post.date || ''}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-amber-600"
        >
          <span>
            {post.date
              ? new Date(post.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                })
              : 'N/A'}
          </span>
          {/* Responsive Divider */}
          {/* <span className="w-px flex-1 bg-gray-900/10"></span> */}
          <span className="bg-gray-900/10 sm:w-px sm:flex-1 sm:h-auto w-full h-px"></span>

          <span>{post.date ? new Date(post.date).getFullYear() : 'N/A'}</span>
        </time>
      </div>
      <div className="sm:block sm:basis-56">
        {/*Using img here because the file upload is in the base64 encoded image string rather than a file path*/}
        {post && (
          <Image
  alt={post?.title || 'Uploaded file'} 
  src={base64Image}
  width={500}
  height={500}
  className="aspect-square h-56 w-full object-cover"
  unoptimized
/>
)}
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <h1 className="font-bold uppercase text-amber-600">{post.title}</h1>
          <div className="text-black font-light text-xs">{post.userName}</div>

          <p
            className={`mt-2 text-sm/relaxed text-gray-700 ${!isExpanded ? 'line-clamp-3' : isExpanded}`}
          >
            {post.content}
          </p>
        </div>

        {/* <div className="sm:flex sm:justify-center"> */}
        <div className="flex justify-end">
          <button
            onClick={expandButton}
            className=" block bg-amber-700 px-6 py-3 mx-1.5 my-1.5 text-center text-xs font-bold uppercase text-white hover:bg-amber-800 transition  rounded-sm"
          >
            {isExpanded ? 'Read Less' : 'Expand'}
          </button>

          <button
            onClick={deleteButton}
            className="block bg-red-800 px-6 py-3 mx-1.5 my-1.5 text-center text-xs font-bold uppercase text-white transition hover:bg-red-900 rounded-sm"
          >
            Delete
          </button>

          <button
            onClick={editButton}
            className="block bg-amber-500 px-6 py-3 mx-1.5 my-1.5 text-center text-xs font-bold uppercase text-white transition hover:bg-amber-600 rounded-sm"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}
