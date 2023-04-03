const ArrowUp = ({ iconColorProp }) => {
	const iconColor = iconColorProp || "#4B4B4B";

	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={iconColor}
				d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
			/>
		</svg>
	)
}

export default ArrowUp;