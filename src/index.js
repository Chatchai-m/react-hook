import React, {Profiler} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
	console.log("id=>", id);
	console.log("phase=>", phase);
	console.log("actualDuration=>", actualDuration);
	console.log("baseDuration=>", baseDuration);
	console.log("startTime=>", startTime);
	console.log("commitTime=>", commitTime);
	// Aggregate or log render timings...
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <Profiler id="App" onRender={onRender}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	// </Profiler>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
