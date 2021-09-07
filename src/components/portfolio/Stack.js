import React from 'react';
import html5 from '../../img/html.svg';
import css3 from '../../img/css3-bw.svg';
import bootstrap from '../../img/bootstrap-bw.svg';
import gsap from '../../img/gsap-greensock-bw.svg';
import js from '../../img/js-bw.svg';
import react from '../../img/react-bw.svg';
import motion from '../../img/motion-bw.svg';

export default function Stack({ stack }) {
  const filter = (tech) => {
    switch (tech) {
      case 'html':
        return <img src={html5} style={{ height: 60 }} alt='HTML' />;
      case 'css':
        return <img src={css3} style={{ height: 60 }} alt='CSS' />;
      case 'bootstrap':
        return <img src={bootstrap} style={{ height: 60 }} alt='Bottstrap' />;
      case 'gsap':
        return <img src={gsap} style={{ height: 60 }} alt='GreenSock GSAP' />;
      case 'js':
        return <img src={js} style={{ height: 60 }} alt='JavaScript' />;
      case 'react':
        return <img src={react} style={{ height: 60 }} alt='ReactJS' />;
      case 'motion':
        return <img src={motion} style={{ height: 60 }} alt='Framer Motion' />;
    }
  };
  return (
    <>
      {stack.map((tech) => {
        return filter(tech);
      })}
    </>
  );
}
