import propTypes from "prop-types";

const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
}) => {
	return <button className="px-3 py-1.5 border border-blue-600 text-white bg-blue-500">{children}</button>;
};

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);
		if (count > 1) {
			return new Error(
				"Only on of primary, secondary, success, warning, danger"
			);
		}
	},
};

export default Button;
