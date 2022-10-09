import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";
import Title from "../Atoms/Title";
import Paragraph from "../Molecules/Paragraph";

function Blog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-20 px-10 gap-10">
      <h1 className="md:col-span-3 text-center py-20">
        <Title
          title="Research, Write, and Everything in Between"
          style="gradient"
        />
      </h1>
      <div>
        <span className="col-span-1 md:line-clamp-4 h-32">
          <Paragraph
            title="High-Quality Content"
            text="Jenni provides high-quality suggestions as you write. Create powerful content 10x faster. "
            style=""
            textStyle="normal"
          />
        </span>
        <PrimaryButton title="Read More" style="" url="#" />
      </div>
      <div>
        <span className="col-span-1 md:line-clamp-4 h-32">
          <Paragraph
            title="Plagiarism Checker"
            text="Feel confident with Jenni's built-in quick and accurate plagiarism checker. Check Jenni's suggestion and your own text for ultimate peace of mind."
            style=""
            textStyle="normal"
          />
        </span>
        <PrimaryButton title="Read More" style="" url="#" />
      </div>
      <div>
        <span className="col-span-1 md:line-clamp-4 h-32">
          <Paragraph
            title="Remove Writer's Block"
            text="Jenni is the AI assistant that keeps you in the driver's seat. Jenni works with you as you write, and once you write with Jenni you can never go back."
            style=""
            textStyle="normal"
          />
        </span>
        <PrimaryButton title="Read More" style="" url="#" />
      </div>
    </div>
  );
}

export default Blog;
