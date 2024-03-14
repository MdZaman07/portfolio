import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: "url(/mountains.jpg)" }}
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
        className=" md:mt-0 sm:mt-0 w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-auto "
      >
        <div className=" max-w-[90%] max-h-[90%] pt-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
            {Projects.map((project, index) => (
              <>
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  githubUrl={project.githubUrl}
                />
                {/* <label className="text-white text-[20px] font-semibold">
                  {project.title}
                </label> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
