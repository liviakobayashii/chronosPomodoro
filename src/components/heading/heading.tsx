import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "../navbar/navbar";

// type HeadingProps = {
//   children: ReactNode;
// };

export function Heading() {
  return (
    <section className=" h-100 flex flex-col justify-center items-center gap-10">
      <div className="  text-[#0ba170] flex flex-col justify-center items-center">
        <button className="bg-transparent">
          <Icon icon="material-symbols:timer-outline" className="text-7xl" />
        </button>
        <p className="font-bold text-4xl">Chronos</p>
      </div>
      <Navbar />
    </section>
  );
}
