import User from "../../assets/UserIcon.png";

export default function Plan() {
  return (
    <>
      <div className="text-7xl font-semibold px-8 flex items-center gap-3 justify-center text-[#141c3a]">
        <h2 id="Plan">My Plan</h2>
        <figure className="w-8 h-8">
          <img src={User} alt="Icon user" />
        </figure>
      </div>
      <div className="px-8 h-[60vh] flex items-center justify-between">
        <div className="flex  w-full h-full items-start justify-start ">
          <article className="w-full h-[80%] flex items-center justify-center">
            <p className="text-2xl  text-[#141c3a] w-[60%] text-center">
              My <span className="text-violet-600"> plan </span> is become an
              Full-Stack Developer. Since Febuary 2022 I have been
              <span className="text-violet-600"> studying </span> programmer. I
              decided to became an Full-Stack because I had some
              <span className="text-violet-600"> opportunies </span> to saw
              projects from my friends And I understand that back end it is very{" "}
              <span className="text-violet-600"> important </span> to make
              things work
            </p>
          </article>
        </div>
        <div className="flex w-full h-full items-end justify-end">
          <article className="w-full h-[80%] flex items-center justify-center">
            <p className="text-2xl text-[#141c3a] w-[60%] text-center">
              I got a lot of
              <span className="text-violet-600"> Front-End </span> skills, and I
              am looking for my first job
              <span className="text-violet-600"> oportunity </span> I am feeling
              ready to work if we
              <span className="text-violet-600"> talking </span> about
              Front-end, otherwise I keep studying Back-End to learn more and be{" "}
              <span className="text-violet-600"> prepared </span> to working as
              an Full-Stack
            </p>
          </article>
        </div>
      </div>
      <div className="px-8 h-[60vh] flex items-center justify-between">
        <div className="flex  w-full h-full items-start justify-start ">
          <article className="w-full h-[80%] flex items-center justify-center ">
            <p className="text-2xl text-[#141c3a] w-[60%] text-center">
              As you could read in the{" "}
              <span className="text-violet-600"> card </span> up there, I still
              want to get some
              <span className="text-violet-600"> UX/UI skills </span> if you ask
              me why? I wanna say "Because it is
              <span className="text-violet-600"> important! </span>" I believe
              that Developers need knowleadg in UX/UI{" "}
              <span className="text-violet-600"> Design </span> and that
              includes Designing's tools
            </p>
          </article>
        </div>
        <div className="flex w-full h-full items-end justify-end">
          <article className="w-full h-[80%] flex items-center justify-center">
            <p className="text-2xl text-[#141c3a] w-[60%] text-center">
              <span className="text-violet-600"> Good Designers </span> work
              with Good Developers, if designers and
              <span className="text-violet-600"> Developers </span> speak the
              same languages the job become easier than{" "}
              <span className="text-violet-600"> expected </span>, So I want to
              speak the same language as them and I am
              <span className="text-violet-600"> styuding </span> for that!
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
