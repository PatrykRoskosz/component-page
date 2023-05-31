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
	return <button>{children}</button>;
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
