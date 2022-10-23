import Study from "../../assets/Studyphoto.png";
import CNA from "../../assets/CNA.jpg";
import UNIP from "../../assets/UNIP.jpg";
import Star from "../../assets/Star.png";
import Udemy from "../../assets/Udemy.png";
import ProfessionalLife from "../../Components/ProfessionalLifeComponent/ProfessionalLife";
import Cambridge from "../../assets/Cambridge.jpg";
import EscolaHumanidade from "../../assets/Escola Humanidade.jpg";
import Hat from "../../assets/HatIcon.png";

export default function AcademicFormation() {
  return (
    <div>
      <div className="text-7xl font-semibold flex flex-col items-center justify-center pt-24 px-8 ">
        <div className="flex items-center gap-3 text-[#141c3a]">
          <h2 id="Academic Formation">Academic Formation</h2>
          <figure className="w-8 h-8">
            <img src={Hat} alt="Icon Code" />
          </figure>
        </div>
      </div>
      <div className="mt-32">
        <div className="w-full h-96 flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-3">
            <p className="w-[50%] h-[40%] text-center text-2xl text-[#141c3a]">
              I am Gratuated as
              <span className="text-violet-600"> technical </span>
              administrative from an
              <span className="text-violet-600"> institution </span> in my city
              called "Escola do homem do amanhã" they gratuated young studants
              to <span className="text-violet-600">got </span> they first job
              <span className="text-violet-600"> oportunity </span>
            </p>
            <div className="flex">
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col gap-3 items-center justify-center">
            <figure className="w-[450px] h-[60%] ">
              <img
                src={EscolaHumanidade}
                alt="School Humanity"
                className="w-[100%] h-[100%] rounded-xl"
              />
            </figure>
            <a
              href="https://escolahumanidade.org.br/informacoes-jovem/"
              target="_blank"
              className="text-2xl text-[#141c3a] hover:text-violet-600 underline"
            >
              Escola Humanidade
            </a>
          </div>
        </div>
        <div className="w-full h-96 flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-8">
            <p className="w-[50%] h-[40%] text-center text-2xl text-[#141c3a]">
              First Certificate in
              <span className="text-violet-600"> English </span> Council of
              Europe Level B1. I<span className="text-violet-600"> Had </span>{" "}
              an oportunity to made the test after ends English course and got
              <span className="text-violet-600"> Level B1 </span>
              but I will <span className="text-violet-600">keep</span>
              studying to get C2 .
            </p>
            <div className="flex">
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col gap-3 items-center justify-center">
            <figure className="w-[450px] h-[60%] ">
              <img
                src={Cambridge}
                alt="School Humanity"
                className="w-[100%] h-[100%] rounded-xl"
              />
            </figure>
            <a
              href="https://www.cambridgeenglish.org/exams-and-tests/first/"
              target="_blank"
              className="text-2xl text-[#141c3a] hover:text-violet-600 underline"
            >
              Cambridge University Press & Assessment English
            </a>
          </div>
        </div>
        <div className="w-full h-96 flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-8">
            <p className="w-[50%] h-[40%] text-center text-2xl text-[#141c3a]">
              Advanced <span className="text-violet-600"> English </span>
              course in CNA I studied in
              <span className="text-violet-600"> this </span> school for 5 years
              , and
              <span className="text-violet-600"> gratuated </span> at 2021
              reciving <span className="text-violet-600"> Advanced </span>
              Certificate in English.
            </p>
            <div className="flex">
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-3">
            <figure className="w-[450px] h-[60%] ">
              <img src={CNA} alt="" className="w-[100%] h-[100%] rounded-xl" />
            </figure>
            <a
              href="https://www.cna.com.br/cursos/ingles-para-jovens"
              target="_blank"
              className="text-2xl text-[#141c3a] hover:text-violet-600 underline"
            >
              CNA
            </a>
          </div>
        </div>
        <div className="w-full h-96 flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-8">
            <p className="w-[50%] h-[40%] text-center text-2xl text-[#141c3a]">
              Coursing <span className="text-violet-600"> collegue </span>
              in Computer Systems
              <span className="text-violet-600"> Analyst </span> in
              <span className="text-violet-600"> Universidade </span>
              Paulista (UNIP), I will finish in 2023.
            </p>
            <div className="flex">
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-3">
            <figure className="w-[450px] h-[60%] ">
              <img src={UNIP} alt="" className="w-[100%] h-[100%] rounded-xl" />
            </figure>
            <a
              href="https://inscricoes.unip.br/inscricao?utm_source=google&utm_medium=cpc&utm_content=search&utm_campaign=unidades&gclid=Cj0KCQjw48OaBhDWARIsAMd966AnIe-7uOST-WMquPFgcgrEMYr9WMj0mM1g04hQsBvk21pyWMX6ly8aAqQ9EALw_wcB&gclsrc=aw.ds"
              target="_blank"
              className="text-2xl text-[#141c3a] hover:text-violet-600 underline"
            >
              UNIP
            </a>
          </div>
        </div>
        <div className="w-full h-96 flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-8">
            <p className="w-[50%] h-[40%] text-center text-2xl text-[#141c3a]">
              I am <span className="text-violet-600">doing</span> a lot of
              Udemy's courses, like: "Design with Figma",
              <span className="text-violet-600">"Web & Mobile Designer"</span>,
              "PHP","
              <span className="text-violet-600"> JavaScript </span> and
              TypeScript for BackEnd", "Next.js and React" and "
              <span className="text-violet-600"> Adobe XD </span>".
            </p>
            <div className="flex">
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
              <img src={Star} alt="stars" className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-3">
            <figure className="w-[450px] h-[60%] ">
              <img
                src={Udemy}
                alt=""
                className="w-[100%] h-[100%] rounded-xl"
              />
            </figure>
            <a
              href="https://www.udemy.com/?ranMID=39197&ranEAID=0EOJOrTo2D4&ranSiteID=0EOJOrTo2D4-QbQnr47sXoESZGKX6HNOEQ&LSNPUBID=0EOJOrTo2D4&utm_source=aff-campaign&utm_medium=udemyads"
              target="_blank"
              className="text-2xl text-[#141c3a] hover:text-violet-600 underline"
            >
              Udemy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
