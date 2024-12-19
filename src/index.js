import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";

import {positions,transitions,Provider as AlterProvider} from "react-alert"
import AlterTemplate from "react-alert-template-basic";

const options = {
    timeout:5000,
    position:positions.BOTTOM_CENTER,
    transition:transitions.SCALE,
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AlterProvider template={AlterTemplate} {...options}>
        <App/>
        </AlterProvider>
    </Provider>
   
);


