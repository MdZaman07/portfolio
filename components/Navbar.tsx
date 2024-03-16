// import { Socials } from "@/constants";
// import Image from "next/image";
// import React from "react";
// import Navigation from "./Navigation";

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
//       <div className="flex flex-row gap-3 items-center">
//         <div className="relative">
//           <Image
//             src="/horselogo.jpg"
//             alt="logo"
//             width={40}
//             height={40}
//             className="w-full h-full object-contain rounded-full"
//           />{" "}
//         </div>
//         <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[25px] font-semibold">
//           Pulok
//         </h1>
//       </div>
//       {/* <div className="flex-grow ml-50"> */}
//       <Navigation />
//       {/* </div> */}

//       <a
//         href="https://www.linkedin.com/in/pulok-uzzaman-06113a27b/"
//         className="flex flex-row gap-5 mb-2"
//       >
//         {Socials.map((social) => (
//           <Image
//             key={social.name}
//             src={social.src}
//             alt={social.name}
//             width={50}
//             height={50}
//             className=" object-contain rounded-full"
//           />
//         ))}
//       </a>
//     </div>
//   );
// };

// export default Navbar;

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    // <div className="fixed top-0 z-[40] w-full bg-transparent flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-1 md:py-5 my-15 sm:my-0">
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex flex-row md:flex-row justify-between items-center px-10 md:px-20 ">
      <div className="flex items-center">
        <div className="relative w-12 h-12 md:w-16 md:h-16 pb-15 md:pb-0 my-10 sm:my-0">
          <Image
            src="/avatar.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="rounded-full bg-red-200"
          />
        </div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[25px] md:text-2xl font-semibold ml-2 md:ml-4">
          Pulok
        </h1>
      </div>

      <Navigation />

      <div className="flex gap-5 hidden mb-20 md:mb-0 mt-3 md:mt-0  ">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.src}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={50}
              height={50}
              layout="responsive"
              objectFit="contain"
              className="rounded-full"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
