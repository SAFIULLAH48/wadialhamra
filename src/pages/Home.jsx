import React from "react";

const Home = () => {
  return (
    <div className="relative bg-[url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center w-full h-[80vh] flex items-center justify-center">
      <div className="absolute text-center text-white font-bold text-2xl md:text-4xl lg:text-5xl animate-fade-in-out">
        Welcome to <p className="text-red-600">WADI AL HAMRA</p>
      </div>
    </div>
  );
};

export default Home;
