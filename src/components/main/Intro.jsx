import React from "react";
import { Image } from "react-bootstrap";
import avatar from "../../assets/images/avatar.jpg";
import copyText from "../../assets/copyText";

const Intro = () => {
  return (
    <section className='intro'>
      <div className='intro-left'>
        <Image alt='picture of Mason Chinkin' src={avatar} roundedCircle />
      </div>
      <div className='intro-right'>
        <h1>Mason Chinkin</h1>
        <p>
          {copyText.myStory}
          <br />
          <br />
          {copyText.d3Story}
          <br />
          <br />
          {copyText.quote}
        </p>
      </div>
    </section>
  );
};

export default Intro;
