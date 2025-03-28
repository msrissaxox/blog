//home page, shows blog posts
import React from "react";
import BlogForm from "../components/BlogForm";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import AccordionCustomIcon from "../components/Accordion";

export default function Index() {
  return (
    <div>
      <BlogForm />
      <BlogCard />
      <AccordionCustomIcon />
      <Footer />
    </div>
  );
}
