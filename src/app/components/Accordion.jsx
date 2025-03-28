'use client';
import React, {useState} from "react";
import SingleAccordion from "./SingleAccordion";
import Link from "next/link";
export default function AccordionCustomIcon() {
    //open value is originally set to 0

  const [open, setOpen] = useState(null);
  //handleOpen function is called when the accordion header is clicked
    //It sets the open state to the index of the accordion that was clicked
//If the accordion is already open, it sets the open state to 0 to close the accordion
  const handleOpen = (value) => setOpen(open === value ? null : value);
  
  const accordionData = [
    {
      id: 1,
      title: "What is BackBook Blog Posts?",
      content:
      <>
        "BackBook Blog Posts allows you to create, edit, and delete blog posts. You can also view all of your blog posts in one place. Learn more 
        {" "}
        <Link className="text-amber-600 hover:text-amber-800" href="/about">
            here.
        </Link>{" "}
        </>
    },
    {
      id: 2,
      title: "How to use BackBook Blog Posts?",
      content:
        "Log in and create posts to share with the world! We are constantly growing and would love you to be a part of our journey!",
    },
    {
      id: 3,
      title: "How can I contact the creators of BackBook Blog Posts?",
      content: (
        <>
        "We would love to collaborate and grow with you. Please {" "}
        <Link className="text-amber-600 hover:text-amber-800" href="/contact">
            contact us 
        </Link> {" "}
         to learn more!
         </>
      ),
    },
  ];

  return (
    <div className="mx-5">
      {accordionData.map((item) => (
        <SingleAccordion
            key={item.id}
            id={item.id}
            open={open}
            handleOpen={handleOpen}
            title={item.title}
            content={item.content}
            />
      ))}
    </div>
  );
}

