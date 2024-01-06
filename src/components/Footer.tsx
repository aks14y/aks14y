import React from "react";
import { SiNextdotjs, SiNextui } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const TOOLS_LINKS = [
    {
      link: "https://nextjs.org/",
      icon: SiNextdotjs,
    },
    {
      link: "https://nextui.org/",
      icon: SiNextui,
    },
    {
      link: "https://undraw.co/",
      icon: FaUserCircle,
    },
  ];
  return (
    <section className="p-2 md:p-8 bg-primary text-black">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col text-xl justify-center gap-2 items-center">
          <div className="flex flex-row gap-2">
            <p>Built with</p>
            {TOOLS_LINKS.map((tool, idx) => (
              <Link key={idx} href={tool.link}>
                <tool.icon className="text-2xl"></tool.icon>
              </Link>
            ))}
          </div>
          <p className="block">
            feel free to{" "}
            <a className="underline" href="https://github.com/aks14y">
              fork this repo.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
