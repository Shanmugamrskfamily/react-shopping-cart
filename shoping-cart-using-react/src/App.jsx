import React, { useState } from "react";
import CardGrid from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ("bootstrap")
import Footer from "./components/Footer";

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <Navbar cartValue={cartValue} />
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
      <Footer/>
      </section>
    </>
  );
}

export default App;
