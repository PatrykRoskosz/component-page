import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const expandedIndexHandler = id => {
		if (expandedIndex === id) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(id);
		}
	};
	const renderedItems = items.map((item, id) => {
		const isExpanded = expandedIndex === id;
		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);

		return (
			<div key={item.id}>
				<div
					className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => expandedIndexHandler(id)}>
					{item.label}
					{icon}
				</div>

				{isExpanded && <div className='border-b p-5'>{item.content}</div>}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
};

export default Accordion;
