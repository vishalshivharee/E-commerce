import React from 'react'
import './a.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function About() {
  return (

    <div >
        <Navbar />
        <div className='mt-12 mb-12 ml-3 mr-3'>
  <h3 className='h' style={{ textAlign: "center", }}>
    Welcome To <span id="W_Name1">Dimppycollection</span>
  </h3>
  <p>
    <span id="W_Name2">Dimppycollection</span> is a Professional{" "}
    <span id="W_Type1">ecommerce</span> Platform. Here we will provide you only
    interesting content, which you will like very much. We're dedicated to
    providing you the best of <span id="W_Type2">ecommerce</span>, with a focus
    on dependability and{" "}
    <span id="W_Spec">
      easy to use, our shop is located in Indorama, check our latest collection
      on our website.{" "}
    </span>
    . We're working to turn our passion for <span id="W_Type3">ecommerce</span>{" "}
    into a booming{" "}
    <a
      href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html"
      rel="do-follow"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      online website
    </a>
    . We hope you enjoy our <span id="W_Type4">ecommerce</span> as much as we
    enjoy offering them to you.
  </p>
  <p>
    I will keep posting more important posts on my Website for all of you.
    Please give your support and love.
  </p>
  <p style={{ fontWeight: "bold", textAlign: "center" }}>
    Thanks For Visiting Our Site
    <br />
    <br />
    <span
      style={{
        color: "blue",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
      }}
    >
      Have a nice day!
    </span>
  </p>
    </div>
    <Footer/>

    </div>
  )
}

export default About