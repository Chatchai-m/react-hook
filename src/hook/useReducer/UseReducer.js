import React, {useEffect} from "react";

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
	{
		id: 1,
		title: "Todo 1",
		complete: false,
	},
	{
		id: 2,
		title: "Todo 2",
		complete: false,
	},
];

const reducer2 = (state, action) => {
	switch (action.type) {
		case "COMPLETE":
			return state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, complete: !todo.complete };
				} else {
					return todo;
				}
			});
		default:
			return state;
	}
};

function UseReducer(props)
{
	const [todos, setTodo] = useReducer(reducer2, initialTodos);
	
	function readTodo()
	{
		console.log("readTodo => ",todos);
	}
	
	useEffect(()=>{
		console.log("useEffect todo => ",todos);
	}, [todos]);
	
	return (
		<>
			<h1>Hello UseReducer</h1>
			
			{todos.map((todo) => (
				<div key={todo.id}>
					<label>
						<input
							type="checkbox"
							checked={todo.complete}
							onChange={() =>{
								setTodo({ type: "COMPLETE", id: todo.id });
								readTodo();
							}}
						/>
						{todo.title}
					</label>
				</div>
			))}
		</>
	);
}

export default UseReducer;