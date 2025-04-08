import React from "react";
export default function Contador() {
  const [contador, setContador] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "p-1 border"
  }, /*#__PURE__*/React.createElement("p", null, "Contador: ", contador), /*#__PURE__*/React.createElement("button", {
    onClick: () => setContador(contador + 1)
  }, "Clique Aqui"));
}