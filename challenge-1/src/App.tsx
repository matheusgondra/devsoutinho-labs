import { InputBorderRadius } from "./components/InputBorderRadius";
import "./App.css";

export const App = () => {
  return (
    <div>
      <h1>[Previwer] border-radius:</h1>
      <div>
        <span>border-radius: 50px 0 0 0;</span>
        <div>
          <div>
            <InputBorderRadius text="Top Left" />
            <InputBorderRadius text="Top Right" />
          </div>

          <div></div>

          <div>
            <InputBorderRadius text="Bottom Left" />
            <InputBorderRadius text="Bottom Right" />
          </div>
        </div>
      </div>
    </div>
  );
}