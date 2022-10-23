import * as Dialog from "@radix-ui/react-dialog";

import Code from "../../assets/DevelopmentIcon.png";

export default function ProfessionalLife() {
  return (
    <>
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
                    <Dialog.Trigger className="text-xl border border-white px-6  rounded-xl bg-white text-[#1b245e] font-bold hover:text-[#2337b4]">
                      Read more
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
                      <Dialog.Content className="fixed bg-[#1b245e] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] h-[400px] shadow-lg shadow-white/50">
                        <Dialog.Title className="text-3xl underline font-bold">
                          How was my journey in Aisin ?
                        </Dialog.Title>
                        <Dialog.Description className="py-10 text-xl">
                          I started working there in Feburary 2019 and stopped
                          at Feburary 2021. My position was Administrative
                          Assistent, I used to work in three department. Human
                          Resources Department, Envirolment Department and
                          Administrative Department, At first was only Human
                          Resources but after the pandemic my manneger ask me If
                          I could worked in two differents departments to help,
                          because they had to decrease workers because the
                          economic effect.
                        </Dialog.Description>
                        <div className="flex justify-end">
                          <Dialog.Close
                            type="button"
                            className="bg-violet-600 px-12 h-12 rounded-md font-semibold hover:bg-violet-700 text-lg uppercase"
                          >
                            Close
                          </Dialog.Close>
                        </div>
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
                    <Dialog.Trigger className="text-xl border border-white px-6  rounded-xl bg-white text-[#1b245e] font-bold hover:text-[#2337b4]">
                      Read more
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
                      <Dialog.Content className="fixed bg-[#1b245e] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] h-[400px] shadow-lg shadow-white/50">
                        <Dialog.Title className="text-3xl underline font-bold">
                          How was my journey in Pepsico ?
                        </Dialog.Title>
                        <Dialog.Description className="py-10 text-xl">
                          I started working there in November 2021 and stopped
                          at March 2021, My position was Production Operator. I
                          recive an oportunity to work as Web Developer in
                          others company. So I had to change this oportunity for
                          a new one.
                        </Dialog.Description>
                        <div className="h-32 flex justify-end items-end">
                          <Dialog.Close
                            type="button"
                            className="bg-violet-600 px-12 h-12 rounded-md font-semibold hover:bg-violet-700 text-lg uppercase"
                          >
                            Close
                          </Dialog.Close>
                        </div>
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
                    <Dialog.Trigger className="text-xl border border-white px-6  rounded-xl bg-white text-[#1b245e] font-bold hover:text-[#2337b4]">
                      Read more
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
                      <Dialog.Content className="fixed bg-[#1b245e] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] h-[400px] shadow-lg shadow-white/50">
                        <Dialog.Title className="text-3xl underline font-bold">
                          How was my journey in Texxia ?
                        </Dialog.Title>
                        <Dialog.Description className="py-10 text-xl">
                          I started working there in March 2022 and stopped at
                          April 2022, My position was Web Development. Was an
                          startup that uses Artificial intelligence to do
                          ChatBot, unfortuanly the company went bankrupt before
                          I completed 2 mouths So after that I decided to focus
                          myself to study and get prepared to a new job
                          oportunity
                        </Dialog.Description>
                        <div className="h-28 flex justify-end items-end">
                          <Dialog.Close
                            type="button"
                            className="bg-violet-600 px-12 h-12 rounded-md font-semibold hover:bg-violet-700 text-lg uppercase"
                          >
                            Close
                          </Dialog.Close>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
