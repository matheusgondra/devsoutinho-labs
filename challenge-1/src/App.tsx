import { InputBorderRadius } from "./components/InputBorderRadius";
import "./App.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const App = () => {
  const [topLeft, setTopLeft] = useState("");
  const [topRight, setTopRight] = useState("");
  const [bottomLeft, setBottomLeft] = useState("");
  const [bottomRight, setBottomRight] = useState("");

  const previewRef = useRef<HTMLDivElement>(null);

  const handleBorderRadius = (e: ChangeEvent<HTMLInputElement>, direction: string) => {
    const value = e.target.value;

    switch (direction) {
      case "topLeft":
        return setTopLeft(value);
      case "topRight":
        return setTopRight(value);
      case "bottomLeft":
        return setBottomLeft(value);
      case "bottomRight":
        return setBottomRight(value);
    }
  }

  useEffect(() => {
    if(previewRef.current){
      previewRef.current.style.borderTopLeftRadius = `${topLeft}px`;
      previewRef.current.style.borderTopRightRadius = `${topRight}px`;
      previewRef.current.style.borderBottomLeftRadius = `${bottomLeft}px`;
      previewRef.current.style.borderBottomRightRadius = `${bottomRight}px`;
    }
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <div className="container">
      <h1 className="title">[Previewer]</h1>
      <h2 className="subtitle">border-radius:</h2>
      <div className="previewer_container">
        <span className="previewer_output">border-radius: 50px 0 0 0;</span>

        <div className="previewer_input-container">
          <InputBorderRadius handleChange={handleBorderRadius} direction="topLeft" text="Top Left" />
          <InputBorderRadius handleChange={handleBorderRadius} direction="topRight" text="Top Right" />
        </div>

        <div ref={previewRef} className="previewer_view"></div>

        <div className="previewer_input-container">
          <InputBorderRadius handleChange={handleBorderRadius} direction="bottomLeft" text="Bottom Left" />
          <InputBorderRadius handleChange={handleBorderRadius} direction="bottomRight" text="Bottom Right" />
        </div>
      </div>
    </div>
  );
}