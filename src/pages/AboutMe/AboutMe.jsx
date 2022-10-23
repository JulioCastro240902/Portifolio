import Header from "../../Components/Header";

import Design from "../../assets/Design.png";
import MeWhite from "../../assets/MeWhite.png";

import PlansCard from "../../Components/PlansComponent/Plans";
import ProfessionalCard from "../../Components/ProfessionalLife/ProfessionalLife";
import AcademicCard from "../../Components/Academic/Academic";

import Laptop from "../../assets/Laptop Code.png";
import Study from "../../assets/Studyphoto.png";

import PlanSection from "../../Components/PlansSection/PlansSection";
import ProfessionalLife from "../../Components/ProfessionalLifeComponent/ProfessionalLife";
import AcademicFormation from "../../Components/AcademicFormation/Academic.Formation";

export default function AboutMe() {
  return (
    <div>
      <Header />

      <div className="w-full h-[460px] flex justify-center items-end">
        <figure className="w-[450px] h-96">
          <img
            className="w-[100%] h-[100%]"
            src={Design}
            alt="Men Programming"
          />
        </figure>
      </div>
      <div className="w-full h-[120vh] bg-violet-600 flex items-start justify-center">
        <div className="text-white text-7xl w-full h-80 flex flex-col gap-10 justify-center items-center pt-72 ">
          <figure className="w-52 h-52">
            <img
              className="w-[100%] h-[100%] rounded-full"
              src={MeWhite}
              alt="MySelf"
            />
          </figure>
          <h2>Hi, I'm Julio Castro. Nice to meet you!</h2>
          <p className="text-3xl text-center w-[65%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic ea
            blanditiis libero consequuntur molestiae, fuga culpa et repudiandae
            eum iste natus necessitatibus, nulla quia, aperiam quod maiores
            asperiores? Id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos hic ea blanditiis libero consequuntur molestiae, fug
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] relative bottom-52 flex justify-center items-center bg-white border-t-[24px] rounded-3xl">
          <PlansCard />
          <ProfessionalCard />
          <AcademicCard />
        </div>
      </div>

      {/* Sections Part */}
      <div>
        <PlanSection />
        <div className="w-full h-[100vh] pt-8">
          <figure className="px-16 w-full ">
            <img className="w-full h-full rounded-xl" src={Laptop} alt="" />
          </figure>
        </div>
        <ProfessionalLife />
        <div className="w-full h-[120vh] pt-10">
          <figure className="px-16 w-full">
            <img className="w-full h-full rounded-xl" src={Study} alt="" />
          </figure>
        </div>
        <AcademicFormation />
      </div>
      {/* End Sections Part */}
    </div>
  );
}
