import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";
import { FaBeer, FaCottonBureau } from "react-icons/fa";

function App() {
	const items = [
		{
			id: 123,
			label: "Can I use React on a project",
			content: "You can use React on any project you want, ",
		},
		{
			id: 231,
			label: "Can I use JavaScript on a project",
			content: "You can use JavaScript on any project you want",
		},
		{
			id: 312,
			label: "Can I use CSS on a project",
			content: "You can use CSS on any project you want",
		},
	];
	return (
		<>
			<Accordion items={items}/> 
		</>
	);
}

export default App;
