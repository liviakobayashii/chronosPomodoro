import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "../navbar/navbar";

// type HeadingProps = {
//   children: ReactNode;
// };

export function Heading() {
  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <div className=" flex flex-col justify-center items-center text-[#0ba170]">
        <button className="bg-transparent">
          <Icon icon="material-symbols:timer-outline" className="text-7xl" />
        </button>
        <p className="font-bold text-5xl ">Chronos</p>
      </div>
      <Navbar />
    </section>
  );
}
