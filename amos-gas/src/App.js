
import './App.css';
import React from 'react';

import Contact from "./contact";
import Nav from "./nav";
import Hero from "./hero";
import Services from "./services";
import Reviews from "./reviews";
import Footer from "./footer";
import GoogleReviews from './reviews';

export default function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className= "bg-white ">
      <head>
        <title>Magna Web Design and Development</title>

      </head>
      <main className="">
     
      <Nav />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      
      
      </main >
    </div >

  )}
 