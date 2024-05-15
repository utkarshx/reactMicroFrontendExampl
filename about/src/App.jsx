import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import store from 'home/Store';
import { Provider, useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'CHANGE_TEXT', payload: 'Clicked' });
  };

  return(
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="text-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        class="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p class="text-gray-500">Web designer</p>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Change Header Text
      </button>
    </div>
    <Footer />
  </div>
)};
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById("app"));