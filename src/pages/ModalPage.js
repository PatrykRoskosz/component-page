import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

  const  showModalHandler = () => {
        setShowModal(true);
    }

	return (
		<div>
			<Button primary onClick={showModalHandler}>Open Modal!</Button>
			{showModal && <Modal />}
		</div>
	);
};

export default ModalPage;
