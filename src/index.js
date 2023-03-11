import React from "react";
import ReactDOM from "react-dom/client";
import {Superior} from './Superior'
import {Filtros} from './Filtros'
import {Tabla} from './Tabla'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <Superior/>
    <Filtros/>
    <Tabla/>
    </>
);
