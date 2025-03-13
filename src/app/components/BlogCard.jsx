//Blog card component is a functional component that displays a single blog post.
//It takes a post object as a prop and displays the post title, content, date, and cover photo.
//It also has a button to expand the content of the post.
//The post object has the following properties: userName, content, title, date, and fileUpload.
//The post object is passed as a prop to the BlogCard component.
//The post object is destructured in the BlogCard component to access the properties.
//The post object is used to display the post title, content, date, and cover photo.
//The expandButton function is called when the expand button is clicked.
//The expandButton function toggles the isExpanded state between true and false.
//The isExpanded state is used to determine whether the post content should be expanded or collapsed.
//The post content is displayed conditionally based on the isExpanded state.
//The button text is also displayed conditionally based on the isExpanded state.
//The expandButton function is passed as a prop to the button component to handle the click event.
'use client'
import React, {useState} from "react";
// console.log("data", { userName, content, title, date, fileUpload });
export default function BlogCard({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function expandButton(){
        console.log("Expand button clicked")
        //sets the state of isExpanded to the opposite of what it currently is
        setIsExpanded(!isExpanded);   
    }
    console.log("BlogCard post:", post);
  // Check if the post object is valid
  if (!post || Object.keys(post).length === 0) {
    return null;
  }

    return (
        <article className="flex bg-white transition hover:shadow-xl mb-3">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime={post.date || ''}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
      <span>{post.date ? new Date(post.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'}) : 'N/A'}</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
        <span>{post.date ? new Date(post.date).getFullYear() : 'N/A'}</span>
    </time>
  </div>
  <div className="hidden sm:block sm:basis-56">
    <img
      alt="uploaded file"
      src={post.fileUpload || 'javascript.jpg'} //FALLBACK HERE
      className="aspect-square h-56 w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          { post.title }
        </h3>
      </a>
      <div className="border-s text-gray-500 font-light text-xs sm:border-l-transparent">
      { post.userName }
      </div>

      <p className={`mt-2 text-sm/relaxed text-gray-700 ${!isExpanded ? 'line-clamp-3' : isExpanded}`}>
         {post.content}  
    </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <button
        href="#"
        onClick={expandButton}
        className=" block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
       {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  </div>
</article>
    )

}
