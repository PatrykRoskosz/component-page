import Button from "./components/Button/Button";

function App() {
	return (
		<>
			<div>App</div>
			<Button success rounded outline>
				kliknij mnie
			</Button>
			<Button danger outline onClick={()=> console.log('hej')}>
				kliknij mnie
			</Button>
			<Button warning>kliknij mnie</Button>
			<Button secondary outline>
				kliknij mnie
			</Button>
			<Button primary rounded>
				kliknij mnie
			</Button>
		</>
	);
}

export default App;
