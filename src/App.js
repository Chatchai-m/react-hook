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

import axios from "axios";
import BlogMain from './other/BlogMain';
import P404 from "./other/P404";
import {useEffect, useState} from "react";
import LayoutLogin from "./layout/LayoutLogin";
import AppCustom from "./assets/js/AppCustom";
const access_token = localStorage.getItem('access_token');

axios.interceptors.request.use((config) =>
    {
        if(!config.exclude_main_url)
        {
            // config.url = AppCustom.MAIN_URL + config.url;
            let host = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
            config.url = host + config.url;
        }

        config.headers.Authorization = `Bearer ${access_token}`;

        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) =>
    {
        return response;
    }, (error) => {
        return Promise.reject(error);
    }
);



function App() {
    // let route1 = <Route path="/" element={<LayoutLogin/>}></Route>;
    // let route2 = "";

    let [route1, setRoute1] = useState(<Route path="/" element={<LayoutLogin/>}></Route>);
    let [route2, setRoute2] = useState(<Route path="/login" element={<LayoutLogin/>}></Route>);

    const checkToken = async () => {

        let rs = await axios({
            method: 'get', url: '/api/Task/CheckToken',
        })
        .catch(AppCustom.AxiosResponseError);

        console.warn("checkToken -> response", rs);

        let temp_route1 = <Route path="/" element={<Main1/>}>
            <Route path="/test1" element={<Test1/>} key="1"/>
            <Route path="/useCallback" element={<UseCallbackMain/>} key="2"/>
            <Route path="/useRef" element={<UseRefMain/>} key="3"/>
            <Route path="/useContext" element={<UseContext/>} key="4"/>
            <Route path="/useContextProblem" element={<UseContextProblem/>} key="5"/>
            <Route path="/useReducer" element={<UseReducer/>} key="5"/>
            <Route path="/blog-main" element={<BlogMain/>} key="1"/>
        </Route>;


        let temp_route2 = <Route path="/main2" element={<Main2/>}>
            <Route path="/main2/test1" element={<Test1/>} key="1"/>
        </Route>;

        setRoute1(temp_route1);
        setRoute2(temp_route2);
    }

    useEffect(() => {
        if (access_token)
        {
            checkToken();
            // console.log("AA");
        }

    }, []);


    return (
        <>
            <BrowserRouter>
                <Routes>
                    {route1}
                    {route2}
                    <Route path="*" element={<P404/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
