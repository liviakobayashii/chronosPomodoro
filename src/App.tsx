import "./styles/global.css";
import HomeView from "./pages/home/view/home-view";
import { Header } from "./components/header/header";
import { TaskContextProvider } from "./providers/task-context-provider";


export function App() {

  return (
    <TaskContextProvider>
      <section className="flex flex-col justify-center items-center py-10 min-h-screen w-full ">
        <div className="flex flex-col justify-center items-center gap-10">
          <Header />
          <HomeView />
        </div>
      </section>
    </TaskContextProvider>
  );
}
