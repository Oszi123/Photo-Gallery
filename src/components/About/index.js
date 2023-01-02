import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          MY NAME IS OSCAR BONILLA I AM A JUNIOR DEVELOPER THAT GRADUATED FROM
          THE UNIVERSITY OF MIAMI CODING BOOTCAMP PROGRAM. I WAS BORN AND RAISED
          IN MIAMI, FLORIDA ON AUGUST 10TH, 1996. MY HOBBIES ARE PLAYING
          MULTIPLE INSTRUMENTS, DRAWING, AND SKATEBOARDING. IN THE BEGINNING OF
          MY COMPUTER SCIENCE JOURNEY WAS IN 2019, WHERE I WAS SELF TAUGHT IN
          HTML, CSS, AND JAVASCRIPT. I DECIDED TO TAKE MY EDUCATION TO THE NEXT
          LEVEL AND I WAS FORTUNATE TO BE ADMITTED TO THE UNIVERSITY OF MIAMI
          CODING BOOTCAMP PROGRAM WHERE I BECAME A FULL STACK WEB DEVELOPER.
        </p>
      </div>
    </section>
  );
}

export default About;
