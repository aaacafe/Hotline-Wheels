import React from 'react';
import ReactDOM from 'react-dom/client';
import 'vite/modulepreload-polyfill';

const render = (Component) => {
  const nodes = document.querySelectorAll(`#${Component.name}`) as any

  nodes.forEach(node => {
    const props = Object.assign({}, node.dataset)

  return ReactDOM.createRoot(node).render(
    <React.StrictMode>
      <Component {...Object.assign({}, props) } />
    </React.StrictMode>
  )
  });
 
}


export default render;