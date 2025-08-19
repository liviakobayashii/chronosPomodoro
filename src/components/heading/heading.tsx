  import { Icon } from "@iconify/react/dist/iconify.js";

  export function Heading() {
    return (
      <section className="flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center text-[#0ba170] ">
          <button className="bg-transparent">
            <Icon icon="material-symbols:timer-outline" className="text-7xl" />
          </button>
          <h1 className="font-bold text-5xl">Chronos</h1>
        </div>
      </section>
    );
  }
