import { useState } from "react";

import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const hideModalHandler = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button primary onClick={hideModalHandler}>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal onClose={hideModalHandler} actionBar={actionBar}>
			<p>Her is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div>
			<Button primary onClick={showModalHandler}>
				Open Modal!
			</Button>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum pulvinar velit, sed tincidunt felis varius eget. Etiam eget
				accumsan purus. Phasellus pretium nisi nulla, quis congue nisi dictum
				eget. Maecenas consequat felis enim, a finibus velit vestibulum et.
				Aenean eget ligula sed mi finibus luctus commodo quis arcu. Nam commodo
				urna tellus, at aliquam justo ultrices quis. Etiam ultrices magna non
				accumsan porta. Morbi finibus, lacus id maximus semper, enim neque
				fringilla eros, sed tincidunt leo dui sed augue. Vivamus eu tincidunt
				enim. Sed dapibus vehicula nunc ac dapibus. Aenean at aliquam tellus.
				Donec eget lectus ipsum. Maecenas libero lectus, lacinia vel ex non,
				bibendum varius sem. Nunc feugiat, purus vitae mattis ornare, diam nulla
				vehicula massa, id pulvinar sapien tellus a velit. Nulla facilisi. Donec
				eros ex, vestibulum vitae justo et, efficitur mattis purus. Aliquam orci
				metus, ullamcorper vitae odio vel, malesuada vulputate libero.
			</p>
			{showModal && modal}
		</div>
	);
};

export default ModalPage;
