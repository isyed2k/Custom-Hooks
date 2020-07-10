import React from "react";
import SWMovies from "./SWMovies";
import UseToggleState from "./hooks/UseToggleState";
import "./styles.css";

export default function App() {
  const [theme, toggleTheme] = UseToggleState("light", ["dark", "light"]);

  return (
    <div className="App">
      <SWMovies />
      <div className={theme}>
        <button onClick={toggleTheme}>Toggle theme {theme}</button>
      </div>
    </div>
  );
}
