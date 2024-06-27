import React, {createContext, useContext, useEffect, useRef} from "react";
import { useCallback, useState, memo } from "react";

const UserContext = createContext();

function Component1()
{
	const [user, setUser] = useState({name: "Chatchai"});
	
	return (
		<UserContext.Provider value={user}>
			<h1>{`Hello ${user.name}!`}</h1>
			<Component2 />
		</UserContext.Provider>
	);
}

function Component2()
{
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}

function Component3()
{
	return (
		<>
			<h1>Component 3</h1>
			<Component4 />
		</>
	);
}

function Component4()
{
	return (
		<>
			<h1>Component 4</h1>
			<Component5 />
		</>
	);
}

function Component5()
{
	const user = useContext(UserContext);
	
	return (
		<>
			<h1>Component 5</h1>
			<h2>{`Hello ${user.name} again!`}</h2>
		</>
	);
}

function UseContext(props)
{
	return (
		<>
			<Component1 />
		</>
	);
}

export default UseContext;