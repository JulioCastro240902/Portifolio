import Header from "../../Components/Header";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";
import ProjectCard from "../../Components/ProjectsCards/ProjectCard";

export default function Projects() {
  const Carossel = useRef();
  const SecondCarrosel = useRef();

  const handleLeftSlide = () => {
    console.log(Carossel.current.offsetWidth);
    Carossel.current.scrollLeft -= Carossel.current.offsetWidth;
  };

  const handleRightSlide = () => {
    console.log(Carossel.current.offsetWidth);
    Carossel.current.scrollLeft += Carossel.current.offsetWidth;
  };

  const handleLeftSecondCarrosel = () => {
    SecondCarrosel.current.scrollLeft -= SecondCarrosel.current.offsetWidth;
  };

  const handleRightSecondCarrosel = () => {
    SecondCarrosel.current.scrollLeft += SecondCarrosel.current.offsetWidth;
  };

  return (
    <div>
      <Header />

      <div className="w-full h-[calc(144px-100vh)]">
        <div className="w-full h-72">
          <div className="w-full h-full flex justify-center items-center">
            <CaretLeft size={40} cursor="pointer" onClick={handleLeftSlide} />
            <div
              className="w-[90%] h-60 px-10 items-center flex gap-10 overflow-x-hidden snap-mandatory scroll-smooth"
              ref={Carossel}
            >
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
            </div>
            <CaretRight size={40} cursor="pointer" onClick={handleRightSlide} />
          </div>
        </div>
        <div className="w-full h-72">
          <div className="w-full h-full flex justify-center items-center">
            <CaretLeft
              size={40}
              cursor="pointer"
              onClick={handleLeftSecondCarrosel}
            />
            <div
              className="w-[90%] h-60 px-10 items-center flex gap-10 overflow-x-hidden snap-mandatory scroll-smooth"
              ref={SecondCarrosel}
            >
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
              <ProjectCard Name="Project Here" />
            </div>
            <CaretRight
              size={40}
              cursor="pointer"
              onClick={handleRightSecondCarrosel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
