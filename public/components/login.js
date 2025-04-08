import React, { useState } from 'react';
import { useAuth } from '../contexts/auth-context.js';
import Input from './input.js';
export const Login = () => {
  const {
    login
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    login({
      email,
      password
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "bg-white shadow-md rounded p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold"
  }, "Login"), /*#__PURE__*/React.createElement(Input, {
    type: "email",
    className: "w-full border p-2 rounded",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    type: "password",
    className: "w-full border p-2 rounded",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  }, "Entrar"));
};