import "./styles/global.css";
import { Heading } from "./components/heading/heading";
import HomeView from "./sections/home/view/home-view";
export function App() {
  return (
<section className="flex flex-col justify-center items-center py-10 min-h-screen w-full ">
  <div className="flex flex-col justify-center items-center gap-10">
    <Heading />
    <HomeView/>
  </div>
</section>
  );
}
