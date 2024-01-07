import FaIcon from "@/components/FaIcon";
import DefaultLayout from "@/layout/DefaultLayout";
import { FaBuilding, FaGraduationCap } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import { RiMagicLine } from "react-icons/ri";
import styles from "../styles/test.module.scss";
import myAnswers from "../assets/my_answers.svg";
import Image from "next/image";

const About = () => {
  const ABOUT_ME = [
    {
      icon: FaBuilding,
      desc: "I’m currently working as a software engineer in a tech company. At the moment, I’m into Typescript, React, & Next.",
    },
    {
      icon: FaGraduationCap,
      desc: "I have a Bachelor’s Degree in Information Technology from Rajagiri School of Engineering and Technology.",
    },
    {
      icon: SiSmartthings,
      desc: "Outside of work, I'm into travelling, photography, badminton, and basically anything outdoorsy!",
    },
    {
      icon: RiMagicLine,
      desc: "I'm all about that minimalistic life and stay motivated to keep it that way :)",
    },
  ];

  return (
    <DefaultLayout>
      <div className="p-8">
        <div className="container mx-auto flex items-center justify-between md:px-36 md:py-32 gap-16">
          <div className="flex flex-row flex-wrap">
            <div className="lg:w-2/4">
              <h1 className="text-6xl mb-16 text-primary">About</h1>
              {ABOUT_ME.map((item, idx) => {
                let animateClass = `animateDelay${idx}s`;
                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-start mb-6 ${styles.content}  ${styles.animate}  ${styles[animateClass]} `}
                  >
                    <FaIcon
                      icon={item.icon}
                      color="text.primary"
                      isLarge={true}
                    />
                    <p className="ml-3 text-xl text-secondary">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <Image
              src={myAnswers}
              alt="answers"
              className="lg:w-2/4 mt-16 lg:mt-0 w-auto md:pl-8"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
