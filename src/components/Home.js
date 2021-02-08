import React from "react";
import image from "../computer.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Minimalist Computer"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-black font-bold cursive leading-none lg:loading-snug home-name">
          Hello I'm Tanner
        </h1>
      </section>
    </main>
  );
}
