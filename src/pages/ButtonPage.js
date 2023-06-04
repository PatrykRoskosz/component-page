import Button from "../components/Button/Button";
import { FaBeer } from "react-icons/fa";

function ButtonPage() {
	return (
		<>
			<div className='w-3/4 grid grid-cols-4 gap-4 mx-auto'>
				<Button primary>kliknij</Button>
				<Button primary outline>
					kliknij
				</Button>
				<Button primary rounded>
					kliknij
				</Button>
				<Button primary rounded outline>
					kliknij
				</Button>

				<Button secondary>kliknij</Button>
				<Button secondary outline>
					kliknij
				</Button>
				<Button secondary rounded>
					kliknij
				</Button>
				<Button secondary rounded outline>
					kliknij
				</Button>

				<Button success>kliknij</Button>
				<Button success outline>
					kliknij
				</Button>
				<Button success rounded>
					kliknij
				</Button>
				<Button success rounded outline>
					kliknij
				</Button>

				<Button warning>warning</Button>
				<Button warning outline>
					warning
				</Button>
				<Button warning rounded>
					warning
				</Button>
				<Button warning outline rounded>
					warning
				</Button>

				<Button danger>kliknij</Button>
				<Button danger outline>
					kliknij
				</Button>
				<Button danger rounded>
					kliknij
				</Button>
				<Button danger rounded outline>
					kliknij
				</Button>
			</div>
		</>
	);
}

export default ButtonPage;
