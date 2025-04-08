import React from "react";

export default function Input({
  id,
  type = "text",
  value,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="p-1 border">
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}
