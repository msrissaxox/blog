//This is the parent component that contains the actual blog post along with the blog card components.
//The BlogForm component manages the state of the blog posts and handles the creation, deletion, and editing of posts.
//This component contains the logic for showing and hiding the NewPost form component, as well as the Modal component for confirming post deletion.

'use client'
import React, { useState } from "react"
import NewPost from "./New-Post";
import BlogCard from "./BlogCard";
import Modal from "./Modal";

export default function BlogForm(){
    //showNewPost is initialized with a false value because the NewPost form is not shown initially.
    const [showNewPost, setShowNewPost] = useState(false);
    //cancelPost is initialized with a false value because the post is not canceled initially.
    const [cancelPost, setCancelPost] = useState(false);
    //showModal is initialized with a false value because the modal is not shown initially.
    const [showModal, setShowModal] = useState(false);
    //postToDelete is initialized with a null value because no post is selected for deletion initially.
    const [postToDelete, setPostToDelete] = useState(null);  
    //postToEdit is initialized with a null value because no post is selected for editing initially.
    const [postToEdit, setPostToEdit] = useState(null);
    //posts array is initialized with a default post object.
    const [posts, setPosts] = useState([
{
    userName: "Default User",
    title: "Welcome to BackBook",
    content: "This is the first post on BackBook. Create your own post to get started!",
    date: "2025-03-12", // Today's date in YYYY-MM-DD format
    fileUpload: "javascript.jpg" // Path to a default image
}
    ]);

//handleCreatePost function is called when the create new post button is clicked.
//It sets the state of showNewPost to true to show the form and cancelPost to false.
    const handleCreatePost = () => {
    console.log("Create Post button clicked");
    setShowNewPost(true);
    setCancelPost(false);
    };

//handleCancelPost function is called when the cancel button is clicked. 
//It sets the state of cancelPost to true and showNewPost to false.
    const handleCancelPost = () => {
    console.log("Cancel Post button clicked");
    setCancelPost(true);
    setShowNewPost(false);
    }

// this function takes a post object as an argument and adds it to the posts array using the setPosts function.
// It also sets the state of showNewPost to false to hide the NewPost form component.

    const handleAddPost = (post) => {
        setPosts([...posts, post]);
        setShowNewPost(false);
    };

    //handleDeletePost function is called when the delete button is clicked.
    //It sets the state of postToDelete to the index of the post to be deleted and show the modal.

    const handleDeletePost = (index) => {
        setPostToDelete(index);
        setShowModal(true);
      };
    
      const confirmDeletePost = () => {
        setPosts(posts.filter((_, i) => i !== postToDelete));
        setShowModal(false);
        setPostToDelete(null);
      };

      const handleEditPost = (index) => {
        setPostToEdit(index);
        setShowNewPost(true);
    };

    const handleUpdatePost = (updatedPost) => {
        setPosts(posts.map((post, index) => (index === postToEdit ? updatedPost : post)));
        setPostToEdit(null);
        setShowNewPost(false);
    };

    return (
        <>
<header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-lime-800 sm:text-3xl">BackBook Blog Posts</h1>

        <p className="mt-1.5 text-sm text-lime-800">
          Where all of your blog posts live.
        </p>
      </div>

      <div className="flex items-center gap-4">
      
        <button 
          onClick={handleCreatePost}
          className="inline-block rounded-sm bg-lime-300 px-5 py-3 text-xs font-bold uppercase text-lime-800 transition hover:bg-lime-400 focus:ring-3 focus:outline-hidden"
          type="button"
        >
          Create New Post
        </button>
      </div>
    </div>
  </div>
  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
</header>
{/* onCancel is passed as a prop to NewPost component to handle the cancel button click event.
It is given the value of the handleCancelPost function */
/* This line conditionally renders a NewPost component when showNewPost is true
(using the logical AND && operator for conditional rendering). The component is passed two props */}

    {showNewPost && (
  <NewPost 
    onCancel={handleCancelPost} 
    onAddPost={postToEdit !==null ? handleUpdatePost : handleAddPost} 
    post={postToEdit !== null ? posts[postToEdit] : null}
    />
  )}
    {/* When cancelPost is true, the blog post does not appear
    {cancelPost} */}
    <div>
        {posts.map((post, index) => (
             <BlogCard 
             key={index} 
             post={post} 
             onDelete={() => handleDeletePost(index)}
             onEdit={() => handleEditPost(index)}
             />
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDeletePost} />
 </>
    );
}
