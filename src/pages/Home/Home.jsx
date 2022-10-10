import Header from "../../Components/Header";
import Me from "../../assets/Me.png";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center gap-10 h-[calc(100vh-144px)]">
        <h1 className="text-5xl md:text-8xl text-center font-bold ">
          Front-End Developer
        </h1>
        <p className="3xl:text-4xl text-3xl text-center font-light">
          Welcome to my website I hope you enjoy it
        </p>
        <figure className="w-72 h-72">
          <img
            className="w-[100%] h-[100%] rounded-full"
            src={Me}
            alt="MySelf"
          />
        </figure>
      </div>
    </div>
  );
}
