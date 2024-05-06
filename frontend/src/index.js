import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider component
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import '../src/assets/styles/index.css';
import store from '../src/store'; // Import the store object from the store.js
import App from './App';
import './assets/styles/bootstrap.custom.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

/**
 * The router object for handling navigation and rendering of routes.
 * @type {BrowserRouter}
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
