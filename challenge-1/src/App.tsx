import { InputBorderRadius } from "./components/InputBorderRadius";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <h1 className="title">[Previewer]</h1>
      <h2 className="subtitle">border-radius:</h2>
      <div className="previewer_container">
        <span className="previewer_output">border-radius: 50px 0 0 0;</span>

        <div className="previewer_input-container">
          <InputBorderRadius text="Top Left" />
          <InputBorderRadius text="Top Right" />
        </div>

        <div className="previewer_view"></div>

        <div className="previewer_input-container">
          <InputBorderRadius text="Bottom Left" />
          <InputBorderRadius text="Bottom Right" />
        </div>
      </div>
    </div>
  );
}