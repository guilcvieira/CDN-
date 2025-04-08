import React, { useState } from "react";
import { useAuth } from ".https://cdn-eight-iota.vercel.app/contexts/auth-context.tsx";
import Input from "https://cdn-eight-iota.vercel.app/components/input.tsx";
import { createRoot } from "react-dom/client";

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Login</h2>
      <Input
        type="email"
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  );
};

window["loginComponent"] = ({ container }) => {
  const elem = document.getElementById(container);

  if (!elem) {
    console.error(`Container with id ${container} not found.`);
    return;
  }

  const root = createRoot(elem);
  root.render(<Login />);
};
