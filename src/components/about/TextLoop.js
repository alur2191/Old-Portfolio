import React, { useEffect, useRef } from 'react';
import '../../main.css';

function TextLoop() {
  useEffect(() => {
    setTimeout(() => {
      textLoop();
    }, 100);
  }, []);
  // looping text
  const textLoop = () => {
    // i represents the character number in a given text
    let i = 0;
    // j represents the item being processed in the text array
    let j = 0;
    const text = ['Graphic Design', 'Brand Identity', 'Blockchain'];
    // how fast the text should be added/removed
    const speed = 75;

    // Typing text function
    const typeWriter = () => {
      if (i < text[j].length) {
        if (textRef.current != null) {
          // Add a character
          textRef.current.innerHTML += text[j].charAt(i);
        } else {
          return;
        }
        i++;
        // if text length matches i:
        if (i === text[j].length) {
          // 1. show blinking cursor
          blink();
          setTimeout(() => {
            // 2. change the array item to process
            j === text.length - 1 ? (j = 0) : j++;
            // 3. initiate reverseType function to remove text characters
            reverseType();
          }, 2000);
        } else {
          // if text length doesn't match yet, initiate typeWriter function again
          setTimeout(typeWriter, speed);
        }
      }
    };
    // Reverse text
    const reverseType = () => {
      if (i > 0) {
        if (textRef.current != null) {
          textRef.current.innerHTML = textRef.current.innerHTML.slice(0, -1);
        } else {
          return;
        }
        i--;
        setTimeout(reverseType, speed);
      }
      if (i === 0) {
        blink();
        setTimeout(() => {
          typeWriter();
        }, 2000);
      }
    };

    typeWriter();
  };

  // Blinking cursor
  const blink = () =>
    cursorRef.current != null
      ? (cursorRef.current.style.display = 'inline')
      : null;

  const textRef = useRef();
  const cursorRef = useRef();

  return (
    <div id='running-text'>
      Besides <span style={{ fontWeight: 'bold' }}>Programming</span> I keep{' '}
      {/* Div below for mobile devices */}
      <div>
        an{' '}
        <i
          className='las la-eye'
          style={{ fontSize: 22, position: 'relative', top: 3 }}
        ></i>
        {` on `}
        <span style={{ fontWeight: 'bold' }} ref={textRef}></span>
        <span
          id='line'
          ref={cursorRef}
          onAnimationEnd={() => (cursorRef.current.style.display = 'none')}
        >
          |
        </span>
      </div>
    </div>
  );
}

export default TextLoop;
