import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
