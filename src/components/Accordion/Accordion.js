import { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
	const renderedItems = items.map((item, id) => {
        const isExpanded = expandedIndex === id;

		return (
			<div key={item.id} onClick={() => setExpandedIndex(id)}>
				<div>{item.label}</div>
				{isExpanded && <div>{item.content}</div>}
			</div>
		);
	});
	return <div>{renderedItems}</div>;
};

export default Accordion;
