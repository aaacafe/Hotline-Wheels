import React from 'react';
import ReactDOM from 'react-dom/client';
import 'vite/modulepreload-polyfill';
import Carousel from './Carousel/Carousel';
import Header from './Header/Header';

const render = (Component, ComponentName) => {
  const containers = document.querySelectorAll("." + ComponentName) as any
  containers.forEach(node => {
    const props = node.dataset.reactprops
    const obj = JSON.parse(props);
    Object.keys(obj).forEach((key) => {
      obj[key] = obj[key];
    });

  return ReactDOM.createRoot(node).render(
    <React.StrictMode>
      <Component {...Object.assign({}, obj) } />
    </React.StrictMode>
  )
  });
 
}

// render all components
render(Carousel, "Carousel")
render(Header, "Header")


// remove data-reactprops from all elements
const nodes = document.querySelectorAll(`[data-reactprops]`) as any
nodes.forEach(node => {  
  const elements = document.getElementsByClassName(node.className);
  for (let element of elements) {
    element!.removeAttribute('data-reactprops');
  }
});

export default render;