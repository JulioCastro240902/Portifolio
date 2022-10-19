import Code from "../../assets/DevelopmentIcon.png";
import Icon from "../IconsAbout/IconsAbout";

export default function Life() {
  return (
    <div className="w-full h-[1200px] border flex flex-col items-center justify-between pt-20 pb-20">
      <div className="text-center text-3xl font-bold text-[#141c3a] gap-5 flex flex-col justify-center items-center">
        <Icon src={Code} />
        <h2>Professional life</h2>
      </div>
      <div className="text-center text-xl w-full h-[80%] text-[#141c3a] gap-5 flex flex-col justify-start items-center mt-10 pl-10 pr-10">
        <p>
          More than 2 years experience working in differences jobs as example in
          a company called Aisin Automotive LTDA.
        </p>
        <span className="text-violet-600">Languages I Speak:</span>
        <p>HTML, CSS, JavaScript, TypeScript</p>
        <span className="text-violet-600">Dev Tools:</span>

        <div className="gap-2">
          <p>GitHUb</p>
          <p>Vercel</p>
          <p>Vite</p>
          <p>React</p>
          <p>Styled-Components </p>
          <p>TailwindCSS</p>
          <p>RadixUI</p>
          <p>Figma</p>
        </div>

        <span className="text-violet-600">Worked</span>

        <div className="gap-2">
          <p>Aisin Automotive Ltda.</p>
          <p>Pepsico</p>
          <p>Texxia IA.</p>
        </div>
      </div>
      <div className=" w-full h-[20%] flex justify-center items-center">
        <a
          href="#Professional Life"
          className="text-2xl text-violet-600 underline cursor-pointer hover:pd-10"
        >
          See more
        </a>
      </div>
    </div>
  );
}
