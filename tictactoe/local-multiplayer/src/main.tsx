// import React from 'react'
// import { render } from 'react-dom';

// import App from './App';

// const rootElement = document.getElementById('root');
// render(<React.StrictMode><App /></React.StrictMode>, rootElement);

import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
