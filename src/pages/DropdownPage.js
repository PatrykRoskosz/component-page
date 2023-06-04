import { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";


const DropdownPage = () => {
	const [selection, setSelection] = useState(null);

	const handleSelect = option => {
		setSelection(option);
	};

	const options = [
		{ label: "Red", value: "red" },
		{ label: "Blue", value: "blue" },
		{ label: "Green", value: "green" },
	];
	return (
		<Dropdown options={options} selection={selection} onSelect={handleSelect} />
	);
};

export default DropdownPage;
