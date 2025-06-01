// This component is the single accordion component. It contains the title and content of the accordion.
//
'use client';
import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-10 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function SingleAccordion({
  id,
  open,
  handleOpen,
  title,
  content,
}) {
  return (
    <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
      <AccordionHeader
        className="text-amber-900 text-left font-semibold text-lg transition-colors duration-200"
        onClick={() => handleOpen(id)}
      >
        {title}
      </AccordionHeader>

      {open === id && (
        <AccordionBody className="h-10 mt-10 mb-5">{content}</AccordionBody>
      )}
    </Accordion>
  );
}
