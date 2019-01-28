import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CanvasChart from './CanvasChart';
import * as serviceWorker from './serviceWorker';

const data = [
  { xlabel: "label 4", y: [2.1, 2.25], clabel: "label 4" },
  { xlabel: "label 4", y: [3, 3.5], clabel: "label 6" },
  { xlabel: "label 4", y: [4, 4.5], clabel: "label 6" },
  { xlabel: "label 4", y: [3.15, 3.3], clabel: "label 4" },
  { xlabel: "label 4", y: [4, 4.15], clabel: "label 4" },
  { xlabel: "label 4", y: [4.95, 5], clabel: "label 4" },
  { xlabel: "label 4", y: [10, 10.2], clabel: "label 4" },
  { xlabel: "label 4", y: [11, 11.25], clabel: "label 4" },
  { xlabel: "label 3", y: [3, 3.5], clabel: "label 6" },
  { xlabel: "label 3", y: [4, 4.5], clabel: "label 6" },
  { xlabel: "label 3", y: [9.75, 11.25], clabel: "label 3" },
  { xlabel: "label 2", y: [0, 0.9], clabel: "label 2" },
  { xlabel: "label 2", y: [3, 3.5], clabel: "label 6" },
  { xlabel: "label 2", y: [4, 4.5], clabel: "label 6" },
  { xlabel: "label 2", y: [4.7, 7.2], clabel: "lebel 2" },
  { xlabel: "label 1", y: [3, 3.5], clabel: "label 6" },
  { xlabel: "label 1", y: [0.9, 3.1], clabel: "label 1" },
  { xlabel: "label 1", y: [4, 4.5], clabel: "label 6" },
  { xlabel: "label 1", y: [11, 11.2], clabel: "label 5" },
  { xlabel: "label 1", y: [1.3, 1.35], clabel: "label 5" },
  { xlabel: "label 1", y: [4, 4.05], clabel: "label 5" }
]

const colors = {
  'label 1': '#3CB371',
  'label 2': '#20B2AA',
  'label 3': '#4169E1',
  'label 4': '#FFC0CB',
  'label 5': '#E6E6FA',
  'label 6': '#FF8080'
}
ReactDOM.render(<CanvasChart data={data} colors={colors} title={"Test chart"} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
