"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  githubUrl: string;
}

// const ProjectCard = ({ image, title, text, githubUrl }: Props) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   function handleFlip() {
//     if (!isAnimating) {
//       setIsFlipped(!isFlipped);
//       setIsAnimating(true);
//     }
//   }

//   return (
//     <div
//       // href={githubUrl}
//       // target="_blank"
//       // rel="noopener noreferrer"
//       onClick={handleFlip}
//       className="w-[450px] h-[280px] rounded-md cursor-pointer"
//     >
//       <motion.div
//         className="flip-card-inner w-full h-full"
//         initial={false}
//         animate={{ rotateY: isFlipped ? 180 : 360 }}
//         transition={{ duration: 0.6, animationDirection: "normal" }}
//         onAnimationComplete={() => setIsAnimating(false)}
//       >
//         <div
//           style={{ backgroundImage: `url(${image})` }}
//           className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
//         >
//           <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
//           <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
//             Learn more &gt;
//           </div>
//         </div>
//         <div
//           style={{ backgroundImage: `url(${image})` }}
//           className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
//         >
//           <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
//           <div className="flex flex-col gap-20 py-3 z-[30]">
//             <h1 className="text-white text-2xl font-semibold">{title}</h1>
//             <p className="text-gray-200 text-[20px]">{text}</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectCard;
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
      className="w-[450px] h-[280px] rounded-md cursor-pointer pr-10 pb-10"
    >
      <label className="text-white text-[20px] font-semibold flex-auto">
        {title}
      </label>
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg border border-white border-opacity-15"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          {/* <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center"> */}
          {/* Learn more &gt; */}
          {/* </div> */}
        </div>

        <div
          // style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-gradient-to-r from-purple-500 to-red-300 bg-cover bg-center text-black rounded-lg"
        >
          <div className="absolute inset-0 w-full h-full rounded-md z-[-1]" />
          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-black text-2xl font-semibold">{title}</h1>
            <p className="text-black text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
