# Personal Portfolio Website

This is my personal portfolio built with React.

### Usage:
```sg
$ npm install
```
and
```sh
$ npm start

# Visit http://localhost:3000
```

### Resources

Icons:  <a href="https://icons8.com/line-awesome">Line awesome</a>

Font: <a href="https://fonts.adobe.com/fonts/aileron">Aileron</a>

Dependencies: emailjs-com, framer-motion, react-swipeable, react-responsive.

### Self-made components

**Dynamic navigation menu arrow**

Component: /src/components/layout/NavMenu.js

Description: Position of the arrow changes to the active page link. Current page is passed to a function with a switch statement based on which the position of the arrow is changed using useRef.

**Portfolio slideshow**

Component: /src/components/portfolio/Portfolio.js

Description: Slideshow fetches data from an object and passes it to other components.

**Typing text**

Component: /src/components/about/TextLoop.js

Description: Simple function that uses if-else and setTimeout that creates a typing effect. 
