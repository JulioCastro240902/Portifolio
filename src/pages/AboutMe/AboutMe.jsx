import * as Dialog from "@radix-ui/react-dialog";

import Design from "../../assets/Design.png";
import MeWhite from "../../assets/MeWhite.png";

import Header from "../../Components/Header";

import PlansCard from "../../Components/PlansComponent/Plans";
import ProfessionalCard from "../../Components/ProfessionalLife/ProfessionalLife";
import AcademicCard from "../../Components/Academic/Academic";

import PlanSection from "../../Components/PlansSection/PlansSection";

import Laptop from "../../assets/Laptop Code.png";

import Code from "../../assets/DevelopmentIcon.png";
import Hat from "../../assets/HatIcon.png";

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

        <div className="w-full">
          <div className="text-7xl font-semibold flex flex-col items-center justify-center pt-24 px-8 ">
            <div className="flex items-center gap-3 text-[#141c3a]">
              <h2 id="Professional Life">Professional Life</h2>
              <figure className="w-8 h-8">
                <img src={Code} alt="Icon Code" />
              </figure>
            </div>

            <div className="w-full flex justify-center">
              <h2 className="w-[70%] text-center text-2xl pt-4 text-[#141c3a]">
                As I said I don't have any profissional experience in Job's
                Development, but I have others Job's experience
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-[160vh] pt-16">
          <div className="w-full h-[550px] flex">
            <div className="w-[50%] h-full  flex items-center justify-center">
              <div className="w-[350px] h-[450px] rounded-xl shadow-2xl shadow-black">
                <div className="w-full h-[55%] bg-[url('./assets/Aisin.jpg')] bg-center rounded-t-xl  bg-no-repeat "></div>
                <div className="w-full h-[45%] bg-[#1b245e] text-white rounded-b-xl">
                  <h2 className="text-center text-3xl font-semibold pt-1">
                    Aisin Automotive Ltda.
                  </h2>
                  <p className="pt-5 px-3">
                    <span className="font-bold">Time:</span> 2019 - 2021
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Position:</span> Administrative
                    Assistent
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Departaments:</span> Human
                    Resources
                  </p>
                  <div className="w-full h-11 flex items-end justify-center">
                    <Dialog.Root>
                      <Dialog.Trigger className="text-xl hover:text-stone-400">
                        Read more
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                          <Dialog.Title>How was my journey there?</Dialog.Title>
                          <Dialog.Description>Was good</Dialog.Description>
                          <Dialog.Close />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full  flex items-center justify-center">
              <div className="w-[350px] h-[450px] rounded-xl shadow-2xl shadow-black">
                <div className="w-full h-[55%] bg-[url('./assets/Pepsico.jpg')] bg-cover bg-center rounded-t-xl  bg-no-repeat "></div>
                <div className="w-full h-[45%] bg-[#1b245e] text-white rounded-b-xl">
                  <h2 className="text-center text-3xl font-semibold pt-1">
                    Pepsico do Brasil
                  </h2>
                  <p className="pt-5 px-3">
                    <span className="font-bold">Time:</span> 2021 - 2022
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Position:</span> Production
                    Operator
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Departaments:</span> Production
                  </p>
                  <div className="w-full h-11 flex items-end justify-center">
                    <Dialog.Root>
                      <Dialog.Trigger className="text-xl hover:text-stone-400">
                        Read more
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                          <Dialog.Title>How was my journey there?</Dialog.Title>
                          <Dialog.Description>Was good</Dialog.Description>
                          <Dialog.Close />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[550px] flex items-center justify-center ">
            <div className="w-[50%] h-full  flex items-center justify-center">
              <div className="w-[350px] h-[450px] rounded-xl shadow-2xl shadow-black">
                <div className="w-full h-[55%] bg-[url('./assets/Texxia.jpg')] bg-cover rounded-t-xl  bg-no-repeat"></div>
                <div className="w-full h-[45%] bg-[#1b245e] text-white rounded-b-xl">
                  <h2 className="text-center text-3xl font-semibold pt-1">
                    Texxia IA
                  </h2>
                  <p className="pt-5 px-3">
                    <span className="font-bold">Time:</span> 2022 - 2022
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Position:</span> Web Development
                  </p>
                  <p className="px-3">
                    <span className="font-bold">Departaments:</span> Web
                    Development
                  </p>
                  <div className="w-full h-11 flex items-end justify-center">
                    <Dialog.Root>
                      <Dialog.Trigger className="text-xl hover:text-stone-400">
                        Read more
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                          <Dialog.Title>How was my journey there?</Dialog.Title>
                          <Dialog.Description>Was good</Dialog.Description>
                          <Dialog.Close />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sections Part */}
    </div>
  );
}
