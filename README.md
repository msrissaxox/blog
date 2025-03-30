## BackBook Blog

A simple, interactive blog application built with Next.js and React that allows users to create, edit, and delete blog posts.

## Features

- Create new blog posts with title, content, date, and image upload
- Edit existing blog posts
- Delete blog posts with confirmation modal
- Expandable post content for better readability
- Responsive design for various screen sizes
- Multi-page routing with Next.js (Home, About, Contact)
- Contact form that sends inquiries directly to my email

## Project Structure

The application consists of several key components:

- BlogForm: Main parent component that manages the state of blog posts and handles CRUD operations
- NewPost: Form component for creating and editing blog posts
- BlogCard: Component for displaying individual blog posts with expand, edit, and delete functionality
- Modal: Confirmation dialog for delete operations
- About Header: Component for displaying the header of the about page.
- About Body: Component for the body of the About page with a call to action to contact us.
- Accordion: This component contains the data for the accordion component. It maps over the data and renders the SingleAccordion component for each item in the data array.
- Single Accordion: This component contains the title and content of the accordion.
- Photo Icon: This component contains the photo that is rendered in the About and Contact pages
- Contact Header: Component for displaying the header of the contact page
- Contact Body: Component for displaying the body of the contact page. This contains the form that uses EmailJS to send all data from the form to my personal email. 
- Nav Bar: Component that displays the nav bar on the Contact and About pages. 
- Footer: Simple footer component displaying copyright information

## Technologies Used

- Next.js - React framework for server-rendered applications
- React - JavaScript library for building user interfaces
- React Hooks (useState, useEffect) - For state management
- TailwindCSS - For styling components
- JavaScript - Programming language
- EmailJS - For sending contact form submissions to my email
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
## Page Routing
This application uses Next.js routing to navigate between pages:

- Home (/) - Main blog post listing and management
- About (/about) - Information about the blog-author
- Contact (/contact) - Contact formm for user inquiries
- not-found.jsx - File in React to handle 404 errors when a user tries to access a route that does not exist. 

## BlogForm Component
This is the main parent component that:

- Manages the state of all blog posts
- Controls the visibility of the post creation form
- Handles post creation, editing, and deletion
- Passes data and callback functions to child components

## NewPost Component
This component renders a form that:

- Captures user input for blog posts (username, title, date, content, image)
- Handles both creation of new posts and editing of existing posts
- Uses controlled form inputs with React state
- Supports image file uploads

## BlogCard Component
This component displays a single blog post with:

- Post title, author, date, and content
- An expandable content section
- Edit and delete buttons
- Responsive layout for different screen sizes

## Modal Component
A reusable confirmation dialog that:

- Appears when a user attempts to delete a post
- Provides cancel and confirm options
- Uses backdrop blur for a modern UI effect

## Contact Form Component
This component provides a user inquiry form that:

- Collects user name, email, and message
- Validates form inputs
- Uses EmailJS to send the inquiry directly to your personal email
- Provides feedback on successful submission

## About Body Component
This component contains the main content of the About page:

- Presents information about the blog, its purpose, and the author
- Features a call-to-action directing visitors to the Contact page

## Accordion Component
This component acts as a container for expandable content sections:

- Maps through a data array to dynamically generate accordion items
- Manages the state of which accordion sections are expanded/collapsed
- Provides a structured way to present information in a space-efficient manner
- Implements smooth animations for expanding and collapsing content
- Renders the SingleAccordion component for each item in the data array

## Single Accordion Component
This component renders an individual expandable section within the Accordion:

- Displays a clickable title bar that toggles content visibility
- Contains hidden content that appears when expanded
- Includes visual indicators (icons/arrows) showing expanded/collapsed state
- Manages its own open/close state with smooth transitions

## Photo Icon Component
This reusable component displays imagery across multiple pages:

- Renders optimized images for the About and Contact pages
- Supports various image formats with appropriate fallbacks
- Implements responsive sizing based on viewport dimensions

## Contact Header Component
This component introduces the Contact page:

- Features a clear, inviting header that encourages communication
- Sets expectations for the contact form below

# Contact Body Component
This component contains the primary functionality of the Contact page:

- Houses the contact form with fields for name, email, and message
- Implements form validation to ensure proper data entry
- Integrates with EmailJS to process and forward form submissions
- Provides user feedback on submission status (success/error)
- Includes privacy information regarding how contact information will be used
- Features responsive design for optimal viewing on all devices

## Nav Bar Component
This navigation component appears on the About and Contact pages:

- Provides intuitive navigation between different sections of the application
- Features links to Home, About, and Contact pages
- Highlights the current active page for user orientation
- Implements responsive design, possibly collapsing to a hamburger menu on smaller screens
- Maintains consistent styling with the overall application theme
- Enhances user experience by providing clear pathways between different sections
- RetryClaude can make mistakes. Please double-check responses.

## How It Works

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
