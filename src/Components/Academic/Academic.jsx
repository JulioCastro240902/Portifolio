import Icon from "../IconsAbout/IconsAbout";
import Hat from "../../assets/HatIcon.png";

export default function Academic() {
  return (
    <div className="w-full h-[1200px] border flex flex-col items-center justify-between pt-20 pb-20">
      <div className="text-center text-3xl font-bold text-[#141c3a] gap-5 flex flex-col justify-center items-center">
        <Icon src={Hat} />
        <h2>Academic Formation</h2>
      </div>
      <div className="text-center text-xl w-full h-[80%] text-[#141c3a] gap-5 flex flex-col justify-start items-center mt-10 pl-10 pr-10 ">
        <p>
          Graduated as Technical Administrative and English, coursing collegue
          in Computer Systems Analyst.
        </p>
        <span className="text-violet-600">Courses I'm doing or did:</span>
        <p>Technical Administrative: 2018 to 2020</p>
        <p>
          Fisrt Certificate in Enlighs Council of Europe Level B1 - Cambridge
          University
        </p>
        <span className="text-violet-600">Coursing:</span>

        <div className="gap-2">
          <p>Computer Systems Analyst</p>
          <p>JavaScript and TypeScript for Back-End - Udemy</p>
          <p>Complete Web & Mobile Designer UI/UX - Udemy</p>
          <p>Next.Js and React - Udemy</p>
          <p>Adobe XD - Udemy</p>
          <p>Motion Design With Figma - Udemy</p>
        </div>
      </div>
      <div className=" w-full h-[20%] flex justify-center items-center">
        <a
          href="#Academic Formation"
          className="text-2xl text-violet-600 underline cursor-pointer hover:pd-10"
        >
          See more
        </a>
      </div>
    </div>
  );
}
