//home page, shows blog posts
import React from "react";
import BlogForm from "./src/app/components/BlogForm";
import BlogCard from "./src/app/components/BlogCard";
import Footer from "./src/app/components/Footer";
import AccordionCustomIcon from "./src/app/components/Accordion";


export default function Index() {
  return (
    <div>
      <BlogForm />
      <BlogCard />
      <AccordionCustomIcon/>
      <Footer />
    </div>
  );
}
