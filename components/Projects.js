import React from "react";
import Desc from "./Desc";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="flex pb-10 md:mt-10 lg:flex-row flex-col ">
      <div className="lg:w-5/12 md:mb-10">
        <Title>Projects</Title>
        <Desc>
          In this page i will show the projects that i've build and develop when
          iam learning about web development, all project build with react js
          and next js with responsive web feature
        </Desc>
      </div>
      <div className="lg:w-7/12  flex flex-wrap md:mt-0 mt-10 xl:mr-14">
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://slicing-landing-page-01-daplan.netlify.app/"
            img="/daplan.png"
            title="Daplan"
            desc="simple landing page"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://gulugulu-search.netlify.app/"
            img="/gulugulu-google-clone.png"
            title="Gulugulu"
            desc="Google search engine clone app"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://cotton-beauty-beach-gsq5x1c5z-decozzfx.vercel.app"
            img="/real-estate-app.png"
            title="Cotton Beauty Beach"
            desc="searching state for sale or rent app"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://slicing-landing-page-02-portopolio.netlify.app/"
            img="/porto-1.png"
            title="Portofolio"
            desc="simple porto website"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://slicing-blog-page-01-epicentrum.netlify.app/"
            img="/epicentrum.png"
            title="Epicentrum"
            desc="blog website"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://example-travel-advisor-app.netlify.app/"
            img="/travel-advisor.png"
            title="Travel Advisor Website"
            desc="simple travel advisor website with rapid api"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://cryptoticks.netlify.app/"
            img="/cryptoticks.png"
            title="Cryptocurrencies Website"
            desc="simple cryptocurrencies website with redux and rapid api"
          />
        </div>
        <div className="md:w-6/12 mt-5">
          <ProjectCard
            link="https://mini-blog-project-decozzfx.netlify.app/"
            img="/web-blog-api.png"
            title="Blog Website"
            desc="simple blog website with api"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
