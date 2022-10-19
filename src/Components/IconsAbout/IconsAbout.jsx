export default function IconsAbout(Icon) {
  return (
    <div className="w-32 h-32 rounded-full border border-black shadow-lg bg-[#5BE9B9] flex justify-center items-center">
      <figure className="w-16 h-w-16">
        <img className="w-full h-full" src={Icon.src} alt="" />
      </figure>
    </div>
  );
}
