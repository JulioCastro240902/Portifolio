export default function ProjectCard(Props) {
  return (
    <>
      <div className="w-96 h-[85%] flex-none snap-start">
        <div className="w-full h-full gap-10 flex flex-col items-center justify-center bg-violet-900 rounded-xl">
          <h2 className="text-3xl text-white">{Props.Name}</h2>
          <a
            href={Props.Link}
            target="_blank"
            className="text-2xl text-white cursor-pointer"
          >
            See Project
          </a>
        </div>
      </div>
    </>
  );
}
