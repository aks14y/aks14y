import DefaultLayout from "@/layout/DefaultLayout";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import FaIcon from "./FaIcon";
import { Button } from "@nextui-org/react";
import styles from "../styles/test.module.scss";
import Image from "next/image";
import programmer from "../assets/programmer.svg";
import steps from "../assets/steps.svg";
import more from "../assets/more.svg";

const Home = () => {
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
                <div className="flex gap-2 ">
                  {SOCIAL_LINKS.map((item, idx) => (
                    <Link
                      className="border-2 rounded-2xl h-8 border-purple hover:bg-slate-900 text-neutral-400 hover:text-white  flex items-center"
                      key={idx}
                      href={item.link}
                    >
                      <FaIcon icon={item.icon}></FaIcon>
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
        <div className="container mx-auto lg:px-36 flex pt-16">
          <div className="flex flex-wrap w-full">
            <div className="border-2 border-purple md:border-r-secondary bg-purple text-black py-36 lg:pr-24 px-12 md:w-1/2 w-full">
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
                  className="bg-black text-purple hover:bg-purple border-2 border-black hover:text-black hover:border-black pl-2 py-6 uppercase"
                >
                  <p className="text-xl">See my bio </p>
                  <IoIosArrowRoundForward
                    className={`text-5xl ml-4 ${styles.animateFlow}`}
                  />
                </Button>
              </div>
            </div>
            <div className="border-2 border-purple bg-black text-purple py-36 lg:pr-24 px-12 md:w-1/2 w-full ">
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
                  className="bg-purple text-black hover:bg-black border-2 border-black hover:text-purple hover:border-purple pl-2 py-6 uppercase"
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
    </DefaultLayout>
  );
};

export default Home;
