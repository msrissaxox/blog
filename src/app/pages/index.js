//home page, shows blog posts
import React from "react";
import BlogForm from "../components/BlogForm";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <BlogForm />
      <BlogCard />
      <Footer />
    </div>
  );
}
