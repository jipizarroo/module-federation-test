import "./index.css";
import { Header } from "../components/Header";
import { CssBoundary } from "css-boundary";

export const App = () => {
  return (
      <div className="container" style={{ background: "red" }}>
        <div>Estoy dentro del contener MFE1!!!</div>
        <Header />
      </div>
  );
};

export default App;
