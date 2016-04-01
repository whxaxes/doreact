import React from 'react';
import { render } from 'react-dom';
import Application from "./application";
import './stylesheets/style.scss';

render(
  <Application />,
  document.getElementById("app")
);