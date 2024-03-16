"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
  githubUrl: string;
}

const ProjectCard = ({ image, title, text, githubUrl }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  useEffect(() => {
    // Reset state when component mounts or when githubUrl changes
    const timeout = setTimeout(() => {
      setIsLinkClicked(false);
    }, 1200);

    setIsLinkClicked(false);
  }, [setIsLinkClicked]);
  useEffect(() => {
    if (!isLinkClicked) {
      setIsFlipped(false);
      setIsAnimating(false);
    }
  }, [isLinkClicked]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  function handleMouseEnter() {
    if (!isAnimating) {
      setIsFlipped(true);
      setIsAnimating(true);
    }
  }

  function handleMouseLeave() {
    // if (!isAnimating) {
    setIsFlipped(false);
    setIsAnimating(true);
    // }
  }

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsLinkClicked(true)}
      className="w-[350px] h-[250px] rounded-md cursor-pointer pr-10 pb-10"
    >
      <label className="text-white text-[16px] font-semibold flex-auto">
        {title}
      </label>
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg border border-white border-opacity-15"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div> */}
        <Image
          alt="Project Image"
          src={image}
          // layout="fill"
          width={350}
          height={250}
          objectFit="contain"
          className="w-full h-full group relative flip-card-front rounded-lg border border-white border-opacity-15"
        />

        <div className="w-full h-full group relative flip-card-back bg-gradient-to-r from-gray-500 to-gray-300 bg-cover bg-center text-black rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-md z-[-1]" />
          <div className="flex flex-col gap-5 py-3 pl-3 pr-3 z-[30]">
            <h1 className="text-black text-2xl font-semibold">{title}</h1>
            <p className="text-black text-[16px]">{text}</p>
          </div>
          <p className="absolute bottom-5 right-5 text-blue-700 hover:underline text-[12px] font-semibold">
            Learn More &gt;
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
