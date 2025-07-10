import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/heading/heading";
export function App() {
  return (
    <div className=" flex flex-col justify-center">
      <Heading />
      <h1 className="text-9xl font-bold text-center">00:00</h1>
    </div>
  );
}
