import React from "react";
import Desc from "./Desc";
import SkillCard from "./SkillCard";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="md:mt-10 ">
      <div>
          <Title>Skills</Title>
          <Desc>
            Some skills that i have and i learn self about web development{" "}
          </Desc>
      </div>
      <div className="flex items-center justify-center flex-wrap pb-20">
        <SkillCard
          img="/javascript.svg"
          skill="Javascript"
          level="Intermediate"
          imgClassName="h-16 rounded-full"
        />
        <SkillCard
          img="/html-5.svg"
          skill="Html"
          level="Basic"
          imgClassName="h-16 ml-2"
        />
        <SkillCard
          img="/css-3.svg"
          skill="Css"
          level="Basic"
          imgClassName="h-16 ml-2"
        />
        <SkillCard
          img="/react.svg"
          skill="ReactJS"
          level="Intermediate"
          imgClassName="h-16"
        />
        <SkillCard
          img="/nextjs-icon.svg"
          skill="Next JS"
          level="Intermediate"
          imgClassName="h-16"
        />
        <SkillCard
          img="/nodejs-icon.svg"
          skill="Node JS"
          level="Basic"
          imgClassName="h-16"
        />
        <SkillCard
          img="/tailwindcss-icon.svg"
          skill="Tailwind CSS"
          level="Intermediate"
          imgClassName="w-16"
        />
        <SkillCard
          img="/mysql-icon.svg"
          skill="Mysql"
          level="Basic"
          imgClassName="h-12 ml-2 bg-white rounded-full"
        />
        <SkillCard
          img="/mongodb.svg"
          skill="Mongo DB"
          level="Basic"
          imgClassName="h-16"
        />
      </div>
    </div>
  );
};

export default Skills;
