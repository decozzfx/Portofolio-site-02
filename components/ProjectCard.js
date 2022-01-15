import React from "react";
import Link from 'next/link'

const ProjectCard = ({link, img, title, desc}) => {
  return (
    <>
      <Link href={link}>
        <a target="_blank">
          <div className="p-4 bg-gray-400/10 rounded-md mx-4 hover:scale-105">
            <img src={img} className="rounded-md w-auto" />
            <div className="text-center">
              <h3 className="mt-6 text-xl font-semibold ">{title}</h3>
              <p className="py-4 text-sm text-white/60">{desc}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProjectCard;
