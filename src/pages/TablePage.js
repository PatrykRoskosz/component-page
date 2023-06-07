import SortableTable from "../components/Table/SortableTable";

const TablePage = () => {
	const data = [
		{ name: "Orange", color: "bg-orange-500", score: 5 },
		{ name: "Apple", color: "bg-red-500", score: 3 },
		{ name: "Banana", color: "bg-yellow-500", score: 1 },
		{ name: "Lime", color: "bg-green-500", score: 4 },
	];

	const config = [
		{
			label: "Name",
			render: fruit => fruit.name,
			sortValue: fruit => fruit.name,
		},
		{
			label: "Color",
			render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div>,
		},
		{ label: "Score", render: fruit => fruit.score ,sortValue: fruit => fruit.score,},
	];

    const dataTwo = [
        { name: "Kamila", age: "31", hight: 165, phonNumber: '531227516' },
        { name: "Stefan", age: "38", hight: 185, phonNumber: '521157536' },
        { name: "Marek", age: "10", hight: 172, phonNumber: '885990333' },
    ]
    const configTwo = [
        {label: "Name", render: (person) => person.name, sortValue: fruit => fruit.name,},
        {label: "Age", render: (person) => person.age, sortValue: fruit => fruit.age,},
        {label: "Hight", render: (person) => person.hight, sortValue: fruit => fruit.hight,},
        {label: "Number", render: (person) => person.phonNumber, sortValue: fruit => fruit.phonNumber,}
    ]

	const keyFn = obj => {
		return obj.name;
	};

	return (
		<div>
			<SortableTable data={data} config={config} keyFn={keyFn} />
			<SortableTable data={dataTwo} config={configTwo} keyFn={keyFn} />
		</div>
	);
};

export default TablePage;
