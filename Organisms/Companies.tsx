import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";
import Title from "../Atoms/Title";
import Paragraph from "../Molecules/Paragraph";
import {
  TbBrandAngular,
  TbBrandReactNative,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandVue,
  TbBrandTailwind,
  TbBrandCss3,
} from "react-icons/tb";

function Companies() {
  return (
    <div id="companies" className="px-10 py-20 md:py-60">
      <div className="md:col-span-3 text-center">
        <Title
          title="Companies are Looking for these Skills"
          style="gradient"
        />
      </div>
      <div className="flex space-x-5 text-techany-200 text-4xl py-10 col-span-1 md:text-5xl md:col-span-3 justify-center">
        <TbBrandReactNative
          title="React"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandNextjs
          title="NextJS"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandVue
          title="Vue"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandAngular
          title="Angular"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandPython
          title="Python"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandJavascript
          title="JavaScript"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandTailwind
          title="Tailwind CSS"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
        <TbBrandCss3
          title="CSS3"
          className="hover:text-pink-400 hover:-translate-y-2 duration-200 "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-10 gap-10">
        <div className="">
          <span className="col-span-1 md:line-clamp-8 h-36">
            <Paragraph
              title="Front End Developers"
              text="Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. "
              style="gradient"
              textStyle="normal"
            />
          </span>
          <PrimaryButton title="Read More" style="" url="#" />
        </div>
        <div>
          <span className="col-span-1 md:line-clamp-8 h-36">
            <Paragraph
              title="Back End Developers"
              text="A back-end developer builds and maintains the technology that powers those components which, together, enable the user-facing side of the website to even exist in the first place."
              style="gradient"
              textStyle="normal"
            />
          </span>
          <PrimaryButton title="Read More" style="" url="#" />
        </div>
        <div>
          <span className="col-span-1 md:line-clamp-8 h-36">
            <Paragraph
              title="User Experience Designers"
              text="The user experience (UX) is how a user interacts with and experiences a product, system or service. It includes a person's perceptions of utility, ease of use, and efficiency."
              style="gradient"
              textStyle="normal"
            />
          </span>
          <PrimaryButton title="Read More" style="" url="#" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
