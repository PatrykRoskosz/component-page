import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
	const renderedHeadTableRows = config.map(column => {
		if (column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>
		} else {
			return <th key={column.label}>{column.label}</th>;
		}
	});
	const renderedBodyTableRows = data.map(rowData => {
		const renderedCells = config.map(column => {
			return (
				<td className='p-3' key={column.label}>
					{column.render(rowData)}
				</td>
			);
		});
		return (
			<tr className='border-3' key={keyFn(rowData)}>
				{renderedCells}
			</tr>
		);
	});

	return (
		<table className='table-auto border-spacing-2'>
			<thead>
				<tr className='border-b-2'>{renderedHeadTableRows}</tr>
			</thead>
			<tbody>{renderedBodyTableRows}</tbody>
		</table>
	);
};

export default Table;
