import { useReducer } from "react";
import { produce } from "immer";
import Button from "../Button/Button";
import Panel from "../Panel/Panel";

const INCREMENT_COUNT = "INCREMENT",
	DECREMENT_COUNT = "DECREMENT",
	CHANGE_VALUE = "change-input-value",
	SEND_FORM = "send-form";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			state.count = state.count + 1;
			return;

		case DECREMENT_COUNT:
			state.count = state.count - 1;
			return;
		case CHANGE_VALUE:
			state.valueToAdd = action.payload;
			return;

		case SEND_FORM:
			state.count = state.count + state.valueToAdd;
			state.valueToAdd = 0;
			return;
		default:
			return state;
	}
};

const Counter = ({ initialCount }) => {
	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialCount,
		valueToAdd: 0,
	});

	const incrementHandler = () => {
		dispatch({ type: INCREMENT_COUNT });
	};
	const decrementHandler = () => {
		dispatch({ type: DECREMENT_COUNT });
	};

	const handleChange = event => {
		const value = parseInt(event.target.value) || 0;
		dispatch({ type: CHANGE_VALUE, payload: value });
	};

	const handleSubmit = event => {
		event.preventDefault();

		dispatch({ type: SEND_FORM });
	};

	return (
		<Panel className='m-3'>
			<h1 className='text-lg'>counter: {state.count}</h1>
			<div className='flex flex-row'>
				<Button primary onClick={incrementHandler}>
					Increment
				</Button>
				<Button secondary outline onClick={decrementHandler}>
					Decrement
				</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type='number'
					className='p-1 m-3 bg-gray-50 border border-gray-300'
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
};

export default Counter;
