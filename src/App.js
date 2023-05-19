import Button from "./components/Button/Button";
import { FaBeer , FaCottonBureau} from "react-icons/fa";

function App() {
	
	return (
		<>
			<div>App</div>
			<Button success rounded outline>
				<FaBeer />
				kliknij mnie
			</Button>
			<Button danger outline>
				kliknij mnie
			</Button>
			<Button warning>kliknij mnie</Button>
			<Button secondary outline>
				kliknij mnie
			</Button>
			<Button primary rounded>
			<FaCottonBureau />
				kliknij mnie
			</Button>
			<Button danger rounded outline>
				<FaCottonBureau />
				Kamilka
			</Button>
		</>
	);
}

export default App;
