import React from 'react';
import ReactDOM from 'react-dom/client';

const Title= ()=>{
 <h1>I am demoing functional composition</h1>
}
const element =<h3>I am a react element</h3>
const root = ReactDOM.createRoot(document.getElementById('root'));

const HeadingComponent = () =>
(
  <div>
  <Title/>
  <h2>I am coming from functional component</h2>
  {"First showing that js can be written in{}" + 101}
  {element}
  </div>
  )
  

root.render(<HeadingComponent/>)
