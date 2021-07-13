import React from "react";
import Contentone from "./components/Contentone";
import Contentthree from "./components/Contentthree";
import Contenttwo from "./components/Contenttwo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Contentone/>
      <Contenttwo/>
      <Contentthree/>
      <Footer/>
    </div>
  );
}

export default App;
