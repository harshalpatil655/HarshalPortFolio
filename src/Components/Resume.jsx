import React from "react";
import resume from "../Resume/resume.pdf";

const Resume = () => {
  return (
    <div>
      <a href={resume} download></a>
    </div>
  );
};

export default Resume;
