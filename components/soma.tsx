import React from "react";
import { createRoot } from "react-dom/client";

export default function Soma({ a, b }: { a: number; b: number }) {
  return (
    <div className="soma">
      <h1>Soma</h1>
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  );
}

window["startComponent"] = ({
  container,
  a,
  b,
}: {
  container: any;
  a: number;
  b: number;
}) => {
  const element = document.getElementById(container);

  if (!element) {
    console.error(`Container with id ${container} not found.`);
    return;
  }

  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      <Soma a={a} b={b} />
    </React.StrictMode>
  );
};
