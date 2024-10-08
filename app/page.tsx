import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[20px] sm:text-[50px] text-white font-semibold max-w-[200px] sm:max-w-[750px]">
            Harnessing the power of IT & creativity to shape the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Future
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            A driven graduate equipped with internship experience and diverse
            project involvement, ready to embark on a dynamic IT career journey.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="https://drive.google.com/file/d/1Mn6WWPce0rFWXht1k8ZBwMvKoB8Kd5-2/view?usp=sharing"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
              target="_blank"
            >
              Resume
            </Link>
            <Link
              href="https://drive.google.com/file/d/1m5W2bforwWYYMiDsDYt2rlOyzXjN9P_1/view?usp=share_link"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              target="_blank"
            >
              Transcript
            </Link>
            {/* <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link> */}
            <Link
              href="http://www.linkedin.com/in/pulok-uzzaman-06113a27b"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 ">
        <Link
          href="https://drive.google.com/file/d/1mQI6fc1GK3ULFEExeyj_iFVR3-9hMpdl/view?usp=sharing"
          className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
          target="_blank"
        >
          Resume
        </Link>
        <Link
          href="https://drive.google.com/file/d/1m5W2bforwWYYMiDsDYt2rlOyzXjN9P_1/view?usp=share_link"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
          target="_blank"
        >
          Transcript
        </Link>
        <Link
          href="http://www.linkedin.com/in/pulok-uzzaman-06113a27b"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
          target="_blank"
        >
          Linkedin
        </Link>
        {/* <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link> */}
      </div>
      <div className="absolute bottom-0 right-0 z-[10] hidden lg:block ">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={220}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={400} height={480} />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
