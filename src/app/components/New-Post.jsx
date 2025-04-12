//New post component is a functional component that displays a form to create a new blog post.
//It takes three props: onCancel, onAddPost and post and these are passed as props to the NewPost component from the BlogForm component.
//onCancel is a function that is called when the cancel button is clicked.
//onAddPost is a function that is called when the submit button is clicked.
//The form has fields for the username, blog title, date, content, and cover photo.
//The form also has a cancel button and a submit button.
//post is from the parent component called BlogForm and is used to populate the form fields when editing a post.
//The form fields are populated with the post object properties if the post object is passed as a prop.
//The form fields are updated when the user types in the input fields.

'use client';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

//Passing onCancel as a prop to NewPost component to handle the cancel button click event.
export default function NewPost({ onCancel, onAddPost, post }) {
  const [userName, setUserName] = useState(post?.userName || '');
  const [content, setContent] = useState(post?.content || '');
  const [title, setTitle] = useState(post?.title || '');
  const [date, setDate] = useState(post?.date || '');
  const [fileUpload, setFileUpload] = useState(post?.fileUpload || '');
  //useEffect hook is used to update the form fields when the post object is passed as a prop.
  //The form fields are updated with the post object properties when the post object changes.
  //The post object is passed as a prop to the NewPost component from the BlogForm component.
  //The post object is used to populate the form fields when editing a post.
  //The form fields are populated with the post object properties if the post object is passed as a prop.
  //The form fields are updated when the user types in the input fields.

  useEffect(() => {
    if (post) {
      setUserName(post.userName);
      setContent(post.content);
      setTitle(post.title);
      setDate(post.date);
      setFileUpload(post.fileUpload);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { userName, content, title, date, fileUpload };

    if (fileUpload) {
      console.log('Post added/updates:', newPost);
      onAddPost(newPost);
      alert('Post added/updated successfully');
    } else {
      alert('Please upload a file');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileUpload(reader.result); // This will be a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      className="w-full max-w-4xl mx-auto mt-12 space-y-12 px-4 sm:px-6 lg:px-8 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-2xl font-semibold text-amber-600 uppercase">
            {post ? 'Edit Blog Post' : 'Create a New Blog Post'}
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Username section */}
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center w-full rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="marissalamothedev"
                    autoComplete="username"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* Blog Title section */}
            <div className="sm:col-span-4">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Blog Title
              </label>
              <div className="mt-2 w-full">
                <textarea
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  rows={1}
                  className="block rounded-md w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Date section */}

            <div className="sm:col-span-4">
              <label
                htmlFor="date"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Blog Post section */}
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block w-full text-sm/6 font-medium text-gray-900"
              >
                Content
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  maxLength={2500}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={'Enter Blog Post Here...'}
                />
              </div>
            </div>

            {/* Cover photo section */}

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Blog photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-amber-600 focus-within:ring-2 focus-within:ring-amber-700 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-amber-700"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        onChange={handleFileChange}
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Submit button */}

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={onCancel}
          type="button"
          className="text-sm/6 font-semibold text-amber-600 uppercase"
        >
          Cancel
        </button>
        <button
          className="inline-block rounded-sm bg-amber-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-600 focus:ring-3 focus:outline-hidden"
          type="submit"
        >
          {post ? 'Update Post' : 'Add Post'}
        </button>
      </div>
    </form>
  );
}
