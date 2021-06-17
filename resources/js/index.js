import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './_helpers';
import Main from "./Main";

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("app")
);
