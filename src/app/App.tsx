import { useState } from "react";
import "./App.css";
import { ConstructorEditorForm } from "../features/constuctor/editor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ConstructorEditorForm />
    </div>
  );
}

export default App;
