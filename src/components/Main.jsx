import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import React from "react";
import Testiomonials from "./Testomonials";

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />

        <Contact />
        <Testiomonials />
      </main>
    </>
  );
}
export default Main;
