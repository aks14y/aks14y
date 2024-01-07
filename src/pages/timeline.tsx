import FaIcon from "@/components/FaIcon";
import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import { MdCake } from "react-icons/md";
import { FaSchool, FaReact } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import steppingUp from "../assets/stepping_up.svg";
import Image from "next/image";
import styles from "../styles/test.module.scss";

const Timeline = () => {
  const TIMELINE_DATA = [
    {
      date: "JUN 1999",
      title: "Hello world!",
      desc: "From Kochi, India, born and raised.",
      icon: MdCake,
    },
    {
      date: "MAY 2017",
      title: "Higher Secondary",
      desc: 'Finished up my high school in computer science stream. "Hello world!" looked intresting. And yes, sometimes lightning strikes!',
      icon: FaSchool,
    },
    {
      date: "MAY 2021",
      title: "Graduated with Bachelor's degree in Information Technology",
      desc: "Just breezed through the whole Bachelor of Technology gig. Got that degree in the bag!",
      icon: FaGraduationCap,
    },
    {
      date: "JUL 2021",
      title: "Junior developer at TechwareLab",
      desc: "Kicked off my professional journey as a frontend web developer. Worked with javascript predominantly reactJs and angular on varoius small scale E-commerce and ERPs. Collaborated with team of varying size and scope.",
      icon: IoLogoJavascript,
    },
    {
      date: "JAN 2023",
      title: "Software engineer at Kalkitech",
      desc: "Leveled up and moved to a higher role as a React developer. Dived into various JavaScript frameworks and libraries, taking on responsibilities in architecture, planning, and coding.",
      icon: FaReact,
    },
    {
      date: "DEC 2023",
      title: "Updated portfolio!",
      desc: "To highlight my skills and enthusiasm for web development, and be ready for new challenges and opportunities.",
      icon: TbWorldWww,
    },
  ];
  return (
    <DefaultLayout>
      <div className="md:container md:mx-auto md:px-36 md:py-32 px-9 pt-5">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="lg:w-2/4">
            <h1 className="text-6xl mb-4 text-secondary">Timeline</h1>
            {TIMELINE_DATA.map((item, idx) => {
              let animateClass = `animateDelay${idx}s`;
              return(
              <div key={idx} className="flex">
                <div className="relative border-l-2 border-l-slate-500 h-auto pr-8 ">
                  <div className="absolute border-2 border-slate-950 rounded-2xl mb-4 p-3 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2  bg-neutral-400"></div>
                </div>
                <div className={`bg-slate-900 border-2 border-slate-950 hover:bg-zinc-900 text-neutral-400 rounded-lg p-5 mb-2.5 w-full ${styles.content}  ${styles.animate}  ${styles[animateClass]}`}>
                  <FaIcon isLarge={true} icon={item.icon} />
                  <p className="mt-4">{item.date}</p>
                  <h4 className="mt-3 text-xl">{item.title}</h4>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            )})}
          </div>
          <Image
            src={steppingUp}
            alt="journey"
            className="lg:w-2/4 mt-16 lg:mt-0 w-auto"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Timeline;
