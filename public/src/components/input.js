import React from "react";
export default function Input({
  id,
  type = "text",
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "p-1 border"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    onChange: onChange
  }));
}