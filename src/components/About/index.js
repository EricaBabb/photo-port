import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        //we need to call the class attribute className, as follows, because class is already a keyword in JavaScript
        <section className="my-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
//{} means you can use JS inside
        
      );
}

export default About;