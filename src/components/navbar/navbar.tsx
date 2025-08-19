import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-7 mt-5">
      <button className="p-3 rounded-lg bg-[#0ba170] text-black">
        <Icon
          icon="material-symbols:home-outline-rounded"
          className="text-4xl"
        />
      </button>
      <button className="p-3 rounded-lg bg-[#0ba170] text-black">
        <Icon icon="pepicons-pop:rewind-time" className="text-4xl" />
      </button>
      <button className="p-3 rounded-lg bg-[#0ba170] text-black">
        <Icon icon="solar:settings-outline" className="text-4xl" />
      </button>
      <button className="p-3 rounded-lg bg-[#0ba170] text-black">
        <Icon icon="solar:sun-outline" className="text-4xl" />
      </button>
    </nav>
  );
}
