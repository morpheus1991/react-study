import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import PageCounter from "./pages/PageCounter";

function App() {
  return (
    <div>
      <PageCounter></PageCounter>
    </div>
  );
}

export default App;
