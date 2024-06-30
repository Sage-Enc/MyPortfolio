import React from "react";
import HTMLLogo from "../assets/HTMLLogo.png";
import CSSLogo from "../assets/CSSLogo.png";
import JSLogo from "../assets/JSLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import NodeJSLogo from "../assets/NodeJSLogo.png";
import MongoDBLogo from "../assets/MongoDBLogo.png";
import TailwindLogo from "../assets/TailwindLogo.png";
import ExpressLogo from "../assets/ExpressLogo.png";
import StudySticker from "../assets/StudySticker.png";
import CanvaLogo from "../assets/CanvaLogo.png"
import VSCodeLogo from "../assets/VSCodeLogo.png"
import GitLogo from "../assets/GitLogo.png"
import GithubLogo from "../assets/GithubLogo.png"
import NPMLogo from "../assets/NPMLogo.png"

function About() {
  const skills = [
    {
      sName: "HTML",
      sLogo: HTMLLogo,
      sScore: "90",
    },
    {
      sName: "CSS",
      sLogo: CSSLogo,
      sScore: "80",
    },
    {
      sName: "JS",
      sLogo: JSLogo,
      sScore: "70",
    },
    {
      sName: "React",
      sLogo: ReactLogo,
      sScore: "70",
    },
    {
      sName: "NodeJS",
      sLogo: NodeJSLogo,
      sScore: "70",
    },
    {
      sName: "Express",
      sLogo: ExpressLogo,
      sScore: "60",
    },
    {
      sName: "Tailwind",
      sLogo: TailwindLogo,
      sScore: 80,
    },
    {
      sName: "MongoDB",
      sLogo: MongoDBLogo,
      sScore: 70,
    },
  ];

  const tools = [
    {
      logoName: "VS Code",
      logo: VSCodeLogo
    },
    {
      logoName: "NPM",
      logo: NPMLogo
    },
    {
      logoName: "Git",
      logo: GitLogo
    },
    {
      logoName: "Github",
      logo: GithubLogo
    },
    {
      logoName: "Canva",
      logo: CanvaLogo
    },
  ];

  return (
    <div className="font-SourceCodePro bg-[#222327] border-b-2 border-neutral-600 lg:px-10">
      <br className="hidden lg:block" />
      <div id="about" className="flex justify-center p-5">
        <div
          id="aboutSection"
          className="border-2 shadow-md shadow-slate-900 w-full border-[#222327] lg:px-12 py-10"
        >
          <h2 className="text-[#6343A3] text-2xl md:text-4xl text-center font-semibold">
            About
          </h2>
          <br />
          <p className="text-[#E5E5E5] text-justify text-md md:text-lg lg:text-xl">
            Hi, I'm{" "}
            <span className="text-[#6343A3] font-semibold">Rutveek</span>, but
            you can also call me{" "}
            <span className="text-[#6343A3] font-semibold">Sage</span>.
            <br />
            I'm from the vibrant city of Nagpur, India.
            <br />
            <br />
            From a young age, I've always been curious about how things work.
            This curiosity led me to explore the depths of the internet, and I
            soon found myself fascinated by how the web functions. This
            fascination turned into a passion for web development. Over time,
            I've immersed myself in learning various web technologies, and now
            I'm dedicated to building websites that not only look great but also
            provide seamless user experiences.
            <br />
            <br />
            My goal is to stay updated with the latest trends in web development
            and continually enhance my skills. I aspire to turn people's ideas
            into interactive realities, helping them elevate their presence on
            the web. Through web development, I aim to create innovative
            solutions that make a meaningful impact.
            <br />
            <br />
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
      <br className="hidden sm:block" />
      <br className="hidden sm:block" />
      <br className="hidden md:block" />
      <div id="skill" className="border-b-2 border-neutral-600">
        <h2 className="text-[#6343A3] text-2xl md:text-4xl text-center font-semibold">
          Skills
        </h2>
        {/* <br className="" /> */}
        <div id="skillSection" className="sm:px-6 md:flex md:my-8">
          <div id="skillSectionLeft" className="hidden md:w-1/2 md:flex justify-center items-center">
            <img src={StudySticker} alt="Skill Sticker" />
          </div>
          <div id="skillSectionRight" className="md:w-1/2">
            {skills.map((skill) => (
              <div
                id="skillField"
                className="w-full flex justify-between p-2 md:p-0 px-5 sm:px-12"
              >
                <img src={skill.sLogo} alt={skill.sName} title={skill.sName} className="w-1/6 md:p-2" />
                <div
                  id="skillScoreContainer"
                  className="w-2/3 md:w-3/4 flex items-center"
                >
                  <div
                    id="skillscoreline"
                    className="h-5 rounded-sm bg-[#6343A3] text-[#E5E5E5] text-right pr-1"
                    style={{ width: `${skill.sScore}%` }}
                  >
                    {skill.sScore + "%"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br className="hidden sm:block" />
      <br className="hidden sm:block" />
      <br className="hidden md:block" />
      <div id="tool" className="my-8">
        <div id="toolSection">
          <h2 className="text-[#6343A3] text-2xl md:text-4xl text-center font-semibold">
            Tools Used
          </h2>
          <div id="toolSectionMain" className="flex flex-wrap justify-center lg:px-8 xl:px-20 py-8">
            {tools.map((tool) => (
              <div
                id="toolField"
                className="w-1/3 p-8 md:w-1/5 flex"
                title={tool.logoName}
              >
                <img src={tool.logo} alt={tool.logoName} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
