import React from "react";
import { createRoot } from "react-dom/client";
export default function Soma({
  a,
  b
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "soma"
  }, /*#__PURE__*/React.createElement("h1", null, "Soma"), /*#__PURE__*/React.createElement("p", null, a, " + ", b, " = ", a + b));
}
window["startComponent"] = ({
  container,
  a,
  b
}) => {
  const element = document.getElementById(container);
  if (!element) {
    console.error(`Container with id ${container} not found.`);
    return;
  }
  const root = createRoot(element);
  root.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Soma, {
    a: a,
    b: b
  })));
};