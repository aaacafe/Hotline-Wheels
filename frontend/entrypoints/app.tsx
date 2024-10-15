import React from 'react';
import ReactDOM from 'react-dom/client';
import 'vite/modulepreload-polyfill';

const render = (Component) => {
  const nodes = document.querySelectorAll(`[data-reactprops]`) as any

  nodes.forEach(node => {
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


export default render;