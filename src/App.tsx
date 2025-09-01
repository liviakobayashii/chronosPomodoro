import "./styles/global.css";
import HomeView from "./pages/home/view/home-view";
import { Header } from "./components/header/header";
export function App() {
  return (
    <section className="flex flex-col justify-center items-center py-10 min-h-screen w-full ">
      <div className="flex flex-col justify-center items-center gap-10">
        <Header />
        <HomeView />
      </div>
    </section>
  );
}
