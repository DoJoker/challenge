import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import { Provider } from 'react-redux';
import store from './components/store';

//ReactDOM.render(<Main />, document.getElementById("app"));
const Application = () => {
 return (<Provider store={store}>
   <Main/>
 </Provider>) 
};

ReactDOM.render(<Application/>, document.getElementById('app'));