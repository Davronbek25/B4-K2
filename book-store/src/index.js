import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1.Install and configure Bootstrap / react-bootstrap in your app
// 2.Create a MyNav component which include a bootstrap navigation bar (Home,
// About, Browse) Note: we don't know how to navigate, so please just put
// some "#" in the hrefs
// 3.Create a MyFooter component which include a footer for the page
// 4.Create a Welcome component with a Jumbotron and a tagline for your shop
// 5.Create a Latest Release component. This component should read from one
// of the json files and print out the cover for the books
// 6.<!-- ### EXTRA  -->
// Using a Dropdown and the State, make the user select a different
// category and display the items of that category.json

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
