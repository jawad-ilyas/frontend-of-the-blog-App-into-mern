import React, { useState } from "react";

const SignIn = () => {


  const handleSubmit = () => {

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-orange-100">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/40 border border-white/50 shadow-lg p-8 rounded-2xl w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-rose-800 text-center mb-3">
          Welcome Back 👋
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-md border border-rose-300 bg-white/50 focus:outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded-md border border-rose-300 bg-white/50 focus:outline-none"
          required
        />


        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-orange-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
        </button>
      </form>
    </div>
  );
}


export default SignIn