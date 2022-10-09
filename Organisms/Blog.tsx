import React from "react";
import Paragraph from "../Molecules/Paragraph";

function Blog() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="col-span-1 m-10">
        <Paragraph
          title="Hello"
          text="yo yo"
          style="gradient"
          textStyle="normal"
        />
      </div>
      <div className="col-span-1 m-10">
        <Paragraph
          title="Let's Go!"
          text="yo yo man"
          style="gradient"
          textStyle="normal"
        />
      </div>
      <div className="col-span-1 m-10">
        <Paragraph
          title="Third tirte"
          text="This is the best! "
          style="gradient"
          textStyle="normal"
        />
      </div>
    </div>
  );
}

export default Blog;
