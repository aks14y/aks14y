import DefaultLayout from "@/layout/DefaultLayout";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import FaIcon from "./FaIcon";
import { Button } from "@nextui-org/react";
import styles from "../styles/test.module.scss";
import Image from "next/image";
import programmer from "../assets/programmer.svg";
import steps from "../assets/steps.svg";
import more from "../assets/more.svg";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { IoGitPullRequest } from "react-icons/io5";
import { TbNetwork } from "react-icons/tb";
import { SiSpeedtest } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aks14y/",
      icon: FaLinkedin,
    },
    {
      name: "Github",
      link: "https://github.com/aks14y",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/aks14y",
      icon: FaInstagram,
    },
  ];

  const SKILL_SET = [
    {
      name: "React",
      icon: FaReact,
      selectable: true,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      selectable: true,
    },
    {
      name: "Design",
      icon: FaPaintBrush,
      selectable: true,
    },
    {
      name: "Repository",
      icon: IoGitPullRequest,
      selectable: true,
    },
    {
      name: "Fetching",
      icon: TbNetwork,
      selectable: true,
    },
    {
      name: "Testing",
      icon: SiSpeedtest,
      selectable: true,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      selectable: true,
    },
    {
      name: "HTML",
      icon: FaHtml5,
      selectable: false,
    },
    {
      name: "NextJs",
      icon: TbBrandNextjs,
      selectable: false,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      selectable: false,
    },
  ];

  const SKILL_SET_CONTENT = [
    {
      idx: 0,
      name: "React",
      sub: [
        {
          name: "State Management",
          content: ["Redux", "Redux Toolkit", "Apollo Client"],
        },
        {
          name: "Styling",
          content: [
            "Styled Components",
            "Material UI",
            "Reactstrap",
            "React Bootstrap",
          ],
        },
      ],
    },
    {
      idx: 1,
      name: "CSS3",
      sub: [
        {
          name: "Frameworks",
          content: ["Bootstrap", "Tailwind"],
        },
        {
          name: "Types",
          content: ["SASS", "Styled Components", "CSS Modules"],
        },
      ],
    },
    {
      idx: 2,
      name: "UI/UX Design",
      sub: [
        {
          name: "Tools",
          content: ["Figma", "Adobe XD", "Zeplin"],
        },
      ],
    },
    {
      idx: 3,
      name: "Repository",
      sub: [
        {
          name: "Platforms",
          content: ["Github", "Azure DevOps", "Gitlab"],
        },
      ],
    },
    {
      idx: 4,
      name: "Data Fetching",
      sub: [
        {
          name: "API's",
          content: ["REST", "Graphql"],
        },
      ],
    },
    {
      idx: 5,
      name: "Testing",
      sub: [
        {
          name: "Browser Library",
          content: ["React testing library", "Playwright"],
        },
      ],
    },
    {
      idx: 6,
      name: "JavaScript",
      sub: [
        {
          name: "Libraries",
          content: ["Axios", "Jest", "Single-spa", "MomentJs"],
        },
      ],
    },
  ];

  return (
    <DefaultLayout>
      <section className="p-4 md:p-8">
        <div className="container mx-auto lg:px-36 lg:pt-32">
          <div className="flex flex-row justify-between flex-wrap">
            <div className="space-y-10 lg:w-2/4">
              <div className="text-7xl font-semibold text-primary">
                Frontend <br /> Developer
                <span className="text-white">.</span>
              </div>
              <div className="font-light text-xl basis-2/3 leading-normal text-secondary">
                I’m a JavaScript Front-End developer based in Kochi, India{" "}
                <br /> who is passionate about building applications and
                learning <br /> new technologies in the front end domain.
              </div>
              <div>
                <p className="font-medium text-lg mb-5 text-primary">
                  Interested in my work? Lets connect!
                </p>
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((item, idx) => (
                    <Link
                      className="border-2 rounded-2xl h-8 border-purple hover:bg-slate-900 text-neutral-400 hover:text-white flex items-center"
                      key={idx}
                      href={item.link}
                    >
                      <div className="ml-2">
                        <FaIcon icon={item.icon}></FaIcon>
                      </div>
                      <span className="px-1.5 text-base mt-0 ">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Image
              src={programmer}
              alt="programmer"
              className="lg:w-2/4 mt-16 lg:mt-0 w-auto"
            />
          </div>
        </div>
      </section>
      <section className="p-8">
        <div className="container mx-auto lg:px-36 pt-16">
          <div className="flex flex-wrap w-full">
            <div className="border-2 border-purple md:border-r-secondary bg-purple text-secondary py-36 lg:pr-24 px-12 md:w-1/2 w-full">
              <div className="flex flex-col space-y-4">
                <h4 className="text-5xl font-bold leading-tight">
                  Know me <br /> more?
                </h4>
                <Image src={more} alt="more" className="w-64" />
                <p className="text-xl font-semibold leading-normal">
                  My Professional Profile and <br /> Personal Passions
                </p>
                <Button
                  as={Link}
                  href="/about"
                  className="bg-black text-secondary hover:bg-purple border-2 border-black hover:border-black hover:border-3 pl-2 py-6 uppercase"
                >
                  <p className="text-xl">See my bio</p>
                  <IoIosArrowRoundForward
                    className={`text-5xl ml-4 ${styles.animateFlow}`}
                  />
                </Button>
              </div>
            </div>
            <div className="border-2 border-purple bg-black text-secondary py-36 lg:pr-24 px-12 md:w-1/2 w-full ">
              <div className="flex flex-col space-y-4">
                <h4 className="text-5xl font-bold leading-tight">
                  Journey <br />
                  through time!
                </h4>
                <Image src={steps} alt="steps" className="w-64" />
                <p className="text-xl font-semibold leading-normal">
                  A Snapshot of my Milestones and
                  <br /> Achievements{" "}
                </p>
                <Button
                  as={Link}
                  href="/timeline"
                  className="bg-purple text-secondary hover:bg-black border-2 border-black hover:text-purple hover:border-purple pl-2 py-6 uppercase"
                >
                  <p className="text-xl">See my steps</p>
                  <IoIosArrowRoundForward
                    className={`text-9xl ml-4 ${styles.animateFlow}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <div className="container mx-auto lg:px-36">
          <h4 className="text-4xl font-medium text-primary leading-tight">
            Skill Set
          </h4>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap flex-row justify-center lg:justify-between gap-4 lg:w-1/2 mt-5">
              {SKILL_SET.map((skill, idx) => (
                <div
                  key={idx}
                  className={`text-secondary shadow-secondary px-32 py-4 flex flex-col items-center w-28 rounded-md ${
                    skill.selectable
                      ? "hover:bg-zinc-900 hover:cursor-pointer shadow-md"
                      : ""
                  } ${selectedSkill === idx ? "bg-zinc-900" : "bg-purple"} `}
                  onClick={() => {
                    if (skill.selectable) setSelectedSkill(idx);
                  }}
                >
                  <FaIcon
                    icon={skill.icon}
                    isLarge={true}
                    color="text-secondary"
                  />
                  <h6>{skill.name}</h6>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 xl:px-8 mt-5 py-1 mx-auto">
              <>
                {SKILL_SET_CONTENT.filter(
                  (item) => item.idx === selectedSkill
                ).map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="border-2 border-primary p-4 w-60 font-extrabold text-lg text-center">
                      {item.name}
                    </div>
                    <div className="pl-4">
                      <div className="flex flex-col">
                        {item.sub.map((item, idx) => (
                          <React.Fragment key={idx}>
                            <div className="pl-40 border-l-2 border-dotted h-full border-secondary">
                              <div className="relative border-2  border-primary after:w-40 after:h-3 p-4 mt-3 after:absolute after:border-b-2 after:border-dotted after:border-secondary after:content-[''] after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-full">
                                <span className="font-bold text-lg">
                                  {item.name}
                                </span>
                                <ul className="list-none p-2">
                                  {item.content.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                      <li>{item}</li>
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
