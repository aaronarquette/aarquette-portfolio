// import Image from "next/image";

import TextType from '@/components/TextType'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { NoiseBackground } from '@/components/ui/noise-background';

export default function Home() {
  const tagline1 = "Turning ", tagline2 = "Into Seamless Web Applications"
  const keywords = ["User Needs","Database Schema", "Complex Logic"]

  const techStack = ["JavaScript", "TypeScript", "Node.js", "React", "Next.js", "PostgreSQL", "AWS"]
  const gradientColors = ["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"]
  const techStackClass = "w-20 h-20 cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-2.5 py-1.5 text-xs text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
  return (
    <>
      <section className="hero bg-background min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <h1 className="text-2xl">Aaron Arquette · Software Developer</h1>
            <div className="pt-3 pb-5.5">
              <div className='py-1'>
                <span className="text-6xl font-bold">{tagline1}</span>
                <span>
                  <TextType 
                    text={keywords}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    texts={keywords}
                    deletingSpeed={50}
                    variableSpeed={false}
                    onSentenceComplete={""}
                    cursorBlinkDuration={0.5}
                    className="text-6xl bg-background"
                  />
                </span>
              </div>
              <h1 className="text-6xl font-bold py-3">{tagline2}</h1>
            </div>
            <div className="flex justify-center pb-4">
              {techStack.map((techStack, idx) => (
                <button key={idx} className="p-0.75 m-1 relative">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
                  <div className="px-2.5 py-1.5 bg-black rounded-full relative group transition duration-200 text-xs hover:bg-transparent">
                    {techStack}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <NoiseBackground containerClassName="w-fit p-2 m-2 rounded-full" gradientColors={gradientColors}>
                <button className={techStackClass}><FiGithub className="mx-auto my-auto w-7/10 h-7/10" /></button>
              </NoiseBackground>
              <NoiseBackground containerClassName="w-fit p-2 m-2 rounded-full" gradientColors={gradientColors}> 
                <button className={techStackClass}><FaLinkedinIn className="mx-auto my-auto w-7/10 h-7/10"/></button>
              </NoiseBackground>
              <NoiseBackground containerClassName="w-fit p-2 m-2 rounded-full" gradientColors={gradientColors}>
                <button className={techStackClass}><GrDocumentPdf className="mx-[11%] my-[11%] w-7/10 h-7/10"/></button>
              </NoiseBackground>
            </div>
          </div>
        </div>
      </section>
      <section className="hero bg-background h-screen">
        <div className="hero-content flex-col">
          {/* <Image></Image> */}
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">An aspiring full-stack developer.</p>
          </div>
        </div>
      </section>
    </>
  );
}
