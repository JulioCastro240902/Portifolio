import User from "../../assets/UserIcon.png";
import Icon from "../IconsAbout/IconsAbout";

export default function Plans() {
  return (
    <div className="w-full h-[1200px] border flex flex-col items-center justify-between pt-20 pb-20 ">
      <div className="text-center text-3xl font-bold text-[#141c3a] gap-5 flex flex-col justify-center items-center">
        <Icon src={User} />
        <h2>What is my plan?</h2>
      </div>
      <div className="text-center text-xl w-full h-[80%] text-[#141c3a] gap-5 flex flex-col justify-between items-center mt-10 pl-10 pr-10">
        <p>
          I am 20 years-old Brazilian Web-Developer, There is a bunch of
          technologies that I want to learn.
        </p>
        <span className="text-violet-600">Things that I plan to learn:</span>
        <p>Back-End and UX/UI Design</p>
        <span className="text-violet-600">Which exactly technologies?</span>

        <span className="text-violet-600 text-xl">Back-End</span>
        <div className="gap-2">
          <p>C#</p>
          <p>PHP</p>
          <p>NodeJs</p>
          <p>NestJs</p>
          <p>JavaScript </p>
          <p>TypeScript </p>
        </div>
        <span className="text-violet-600 text-xl">Design</span>
        <div className="gap-2">
          <p>Figma</p>
          <p>Adobe</p>
          <p>Logo</p>
          <p>Sketch</p>
          <p>PhotoShop</p>
        </div>
      </div>
      <div className="w-full h-[20%] flex justify-center items-center">
        <a
          href="#Plan"
          className="text-2xl text-violet-600 underline cursor-pointer hover:pd-10"
        >
          See more
        </a>
      </div>
    </div>
  );
}
