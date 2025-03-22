## BackBook Blog

A simple, interactive blog application built with Next.js and React that allows users to create, edit, and delete blog posts.

## Features

- Create new blog posts with title, content, date, and image upload
- Edit existing blog posts
- Delete blog posts with confirmation modal
- Expandable post content for better readability
- Responsive design for various screen sizes

## Project Structure
The application consists of several key components:

- BlogForm: Main parent component that manages the state of blog posts and handles CRUD operations
- NewPost: Form component for creating and editing blog posts
- BlogCard: Component for displaying individual blog posts with expand, edit, and delete functionality
- Modal: Confirmation dialog for delete operations
- Footer: Simple footer component displaying copyright information

## Technologies Used

- Next.js - React framework for server-rendered applications
- React - JavaScript library for building user interfaces
- React Hooks (useState, useEffect) - For state management
- TailwindCSS - For styling components
- JavaScript - Programming language

## Getting Started
Clone the Repository
``` 
git clone https://github.com/msrissaxox/blog.git
```
```
cd blog
```
Install Dependencies
```
npm install
```

Run the development server
```
npm run dev
```

Open your browser and navigate to http://localhost:3000

## Project Walkthrough
BlogForm Component
This is the main parent component that:

- Manages the state of all blog posts
- Controls the visibility of the post creation form
- Handles post creation, editing, and deletion
- Passes data and callback functions to child components

NewPost Component
This component renders a form that:

- Captures user input for blog posts (username, title, date, content, image)
- Handles both creation of new posts and editing of existing posts
- Uses controlled form inputs with React state
- Supports image file uploads

BlogCard Component
This component displays a single blog post with:

- Post title, author, date, and content
- An expandable content section
- Edit and delete buttons
- Responsive layout for different screen sizes

Modal Component
A reusable confirmation dialog that:

- Appears when a user attempts to delete a post
- Provides cancel and confirm options
- Uses backdrop blur for a modern UI effect

How It Works

Creating a Post:

- Click the "Create New Post" button
- Fill out the form with your username, title, date, content, and optional image
- Click "Add Post" to save your post


Editing a Post:

- Click the "Edit" button on any post
- The form will be pre-filled with the post's current content
- Make your changes and click "Update Post"


Deleting a Post:

- Click the "Delete" button on any post
- Confirm deletion in the modal dialog


Expanding Content:

- Click "Expand" to see the full content of a post
- Click "Read Less" to collapse it again



Data Persistence
Currently, the application stores data in-memory using React state. When the page refreshes, it will revert to the default post. To add persistence, you could:

- Implement local storage
- Connect to a backend API
- Add a database like MongoDB or PostgreSQL

Future Enhancements
Potential improvements for the project:

- User authentication
- Comments section
- Post categories and tags
- Search functionality
- Data persistence with a database
- Social media sharing

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
- Next.js team for the amazing framework
- React team for the library
- Tailwind CSS for the styling utilities
