import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main1 from './layout/Main1';
import Main2 from './layout/Main2'; 
import Test1 from './other/Test1';
import UseCallbackMain from './hook/useCallback/UseCallbackMain';
import UseRefMain from './hook/useRef/UseRefMain';
import UseContext from './hook/useContext/UseContext';
import UseContextProblem from "./hook/useContext/UseContextProblem";
import UseReducer from "./hook/useReducer/UseReducer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main1/>}>
            <Route path="/test1"  element={<Test1 />} key="1" />
            <Route path="/useCallback"  element={<UseCallbackMain />} key="2" />
            <Route path="/useRef"  element={<UseRefMain />} key="3" />
            <Route path="/useContext"  element={<UseContext />} key="4" />
            <Route path="/useContextProblem"  element={<UseContextProblem />} key="5" />
            <Route path="/useReducer"  element={<UseReducer />} key="5" />
          </Route>
          <Route path="/main2" element={<Main2/>}>
            <Route path="/main2/test1"  element={<Test1 />} key="1" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
