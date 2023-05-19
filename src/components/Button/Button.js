import className from "classnames";



const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) => {
	const classes = className(rest.className,  "flex items-center px-3 py-1.5 border", {
		"border-blue-500 bg-blue-500": primary,
		"border-gray-900 bg-gray-900": secondary,
		"border-green-500 bg-green-500": success,
		"border-yellow-400 bg-yellow-400": warning,
		"border-red-500 bg-red-600": danger,
		"text-white":
			!outline && (primary || secondary || success || warning || danger),
		"rounded-full": rounded,
		"bg-white border-2": outline,
		"text-blue-500": primary && outline,
		"text-gray-900": outline && secondary,
		"text-green-500": success && outline,
		"text-yellow-400": outline && warning,
		"text-red-500": outline && danger,
	});
	return <button className={classes} {...rest}>{children}</button>;
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